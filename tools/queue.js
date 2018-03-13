var config = require('../config/config');
var Logger = require('./Logger');

var actionPush = require('../actions/push');

var Queue = require('../models/Queue');

var AWS = require('aws-sdk');
AWS.config.update({accessKeyId: config.AWS_KEY_ID, secretAccessKey: config.AWS_SECRET_KEY});
config.SQS_Service = new AWS.SQS({region: 'us-east-2'});

var queue = {};

var ACTION_SAVE_RAWVIDEODATA = 'save_raw_video_data';
var ACTION_UPDATE_LIKE = 'update_like';
var ACTION_UPDATE_USER_PROFILE = 'update_user_profile';
var ACTION_UPDATE_USER_USAGE = 'update_user_usage';

var MessageGroupId = "p12wEDfnFSTqVL3u0gq99Qp8cET0Fix67Ap0kOkUleINjSaiqReTXNyHmWtuCwVxpyi7oJphZP9LC4nSDGwfBQbSE4VMorponz63L8cOYqMITlLsa1Aoeo95lnBILqxD"; //just random string

var ACTION_SEND_PUSH = "send_push";

queue.ACTION_SEND_PUSH = ACTION_SEND_PUSH;

queue.start = function () {

    setInterval(function () {
        var params = {
            QueueUrl: config.AWS_QUEUE_URL,
            VisibilityTimeout: 30//60 // 600 = 10 min wait time for anyone else to process.
        };
        config.SQS_Service.receiveMessage(params, function (err, data) {

            if (err) {
                Logger.error(err);
            } else {
                if (data.Messages) {
                    doSMTH(data);
                } else {
                    //Logger.info("No message or waiting for delete");
                }
            }

            function doSMTH(data) {
                var message = JSON.parse(data.Messages[0].Body);
                //var jobData = message.data;

                Logger.info("Got message: " + data.Messages[0].Body);

                switch (message.action) {
                    case ACTION_SEND_PUSH:
                        actionPush.send(message, data);
                        break;
                    default:
                        Logger.warn("Unknown action " + message.action + ". Deleting job");
                        deactivateJob(message, data);
                        break;
                }
                //deactivateJob(message, data);
            }

            function deleteMessage(messageId, message) {
                var params = {
                    QueueUrl: config.AWS_QUEUE_URL,
                    ReceiptHandle: messageId
                };
                config.SQS_Service.deleteMessage(params, function (err, data) {
                    if (err) {
                        Logger.error("Delete error: " + JSON.stringify(err));
                    }
                    else {
                        Logger.info("Message: " + message + " - deleted");
                    }
                });
            }

            function deactivateJob(message, data) {
                if (message.queueId) {
                    Queue.findByIdAndUpdate(message.queueId, {end: new Date(), active: false}, function (err) {
                        if (err) {
                            Logger.error("Error deactivating job: " + JSON.stringify(JSON.parse(data.Messages[0].Body), null, 4));
                        } else {
                            Logger.info("Job deactivated.");
                        }
                        deleteMessage(data.Messages[0].ReceiptHandle, data.Messages[0].Body);
                    });

                } else {
                    Logger.error("Error deactivating job: " + JSON.stringify(JSON.parse(data.Messages[0].Body), null, 4));
                    Logger.error("No queueId");
                }
            }


        });
    }, 5000);
};
queue.addJob = function (action, api, data, callback) {
    var queueItem = new Queue({
        action: action,
        active: true,
        api: api,
        sended_data: JSON.stringify(data),
        start: new Date()
    });
    queueItem.save(function (err, createdObj) {
        if (err) {
            Logger.error("Error saving new job: " + err);
            return {status: false, err: err};
        } else {
            data.queueId = createdObj._id.toString();
            data.action = action
            var params = {
                MessageBody: JSON.stringify(data),
                QueueUrl: config.AWS_QUEUE_URL,
                DelaySeconds: 0,
                MessageGroupId: MessageGroupId
            };

            config.SQS_Service.sendMessage(params, function (err, responce) {
                callback(err, createdObj._id.toString());

            });
        }
    })
};

module.exports = queue;