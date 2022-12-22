'use strict'
const AWS = require('aws-sdk');

//AWS.config.Update({ region: "eu-central-1"});

exports.handler = function (event, context, callback) {
    const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08"});
  let params = {
        TableName : "Test",
        Key: event.detail
}
}
ddb.getItem(params, (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data);
})