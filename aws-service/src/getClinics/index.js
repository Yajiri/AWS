'use strict';
const AWS = require('aws-sdk');
//AWS.config.Update({ region: "eu-central-1"});

const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08"});
exports.handler = async (event, context, callback) => {

    const params = { 
      TableName: "DentistimoClinicsTable",
      ProjectionExpression: "#name, #owner, clinicId , address, city, dentists, coordinate, openinghours",
      ExpressionAttributeNames: {'#name': 'name', '#owner': 'owner'}
};


const Clinics = await ddb.scan(params).promise() ;
let convertedBody = [];
for (let index=0; index<Clinics.Items.length; index++)
{
    var c = Clinics.Items[index];
    var uM = AWS.DynamoDB.Converter.unmarshall(c);
    convertedBody.push(uM);
}
//
let responseBody = {
    Clinics:convertedBody
};
//
var response = {
    statusCode : 200,
    body: JSON.stringify(responseBody),
    isBase64Encoded : false,
    headers:{"content-type" : "application/json"}
};

// var response = {
//     //statusCode : 200,
//     Clinics : convertedBody,
//     //isBase64Encoded : false,
//     //headers : {"content-type" : "application/json"}
// };

callback (null, response);

};