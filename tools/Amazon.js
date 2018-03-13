let express = require('express');
let router = express.Router();
let S3 = require('../config/amazon').S3;
let Logger = require('./Logger');
let fs = require('fs');

let tools = {};

tools.uploadFileToS3 = function (file, folder, callback) {
    let filename = tools.randomString(12);
    let uploadParams = {Bucket: S3.BucketToUpload, Key: '', Body: ''};
    let res = [];
    let fileStream = fs.createReadStream(file.destination + "/" + file.filename);
    fileStream.on('error', function (err) {
        return callback(err);
    });
    uploadParams.Body = fileStream;

    let imageNameSplitArray = file.originalname.split('.');

    uploadParams.Key = folder + '/' + filename + '.' + imageNameSplitArray[imageNameSplitArray.length - 1];
    S3.upload(uploadParams, function (err, data) {
        if (err) {
            return callback(err);
        }
        if (data) {
            Logger.debug("Upload Success", data.Location);
            return callback(null, data.Location);
        }

    });
};

tools.randomString = function(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < len; i++) {
        let randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
};

module.exports = tools;
