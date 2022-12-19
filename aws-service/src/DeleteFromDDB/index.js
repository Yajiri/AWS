const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient({region: 'eu-central-1'});

exports.handler = function(event, context, callback) {
    let params = {
        TableName : "Test",
        Key: event.detail
}
 documentClient.delete(params, function(err, data){
         if(err) {
        callback(err, null);
    }
    callback(null, data);
 })
}