'use strict'

const AWS = require('aws-sdk')
AWS.config.update({ region: "eu-central-1" })
const eventBridge = new AWS.EventBridge()

exports.handler = async (event, context, callback) => {
    console.log("Processing...");
    const params = {
        Entries: [ 
      {
        Detail: JSON.stringify({
          "clinicId": event.ClinicId,
          "date": event.Date,
          "email": event.email,
          "time": event.time
        }),
        DetailType: 'CreateAppointment',
        EventBusName: 'DentistimoEventBus',
        Source: 'Test',
        Time: new Date 
      }
    ]
    };
    const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify('Hello from new Lambda!'),
  };
    console.log(JSON.stringify(params));
  // Publish to EventBridge
  const result = await eventBridge.putEvents(params).promise()
  console.log(result)
};