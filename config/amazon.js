let amazon = {};
let AWS = require('aws-sdk');

let AWS_KEY_ID = "AKIAIGNN6MME7DABIWEQ";
let AWS_SECRET_KEY = "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";
let S3_BUCKET = 'm-bakara';



AWS.config.update({
    accessKeyId: AWS_KEY_ID,
    secretAccessKey: AWS_SECRET_KEY
});

amazon.S3 = new AWS.S3({
    apiVersion: '2006-03-01'
});
amazon.S3.BucketToUpload = S3_BUCKET;

module.exports = amazon;