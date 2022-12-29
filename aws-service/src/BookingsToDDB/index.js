'use strict'  
const AWS = require('aws-sdk'); 
const documentClient = new AWS.DynamoDB.DocumentClient({region: 'eu-central-1'});
// lines 1-50 written by Jens  
exports.handler = function(event, context, callback) {     
    let params = {         
        TableName : "DentistimoBookings",         
        Key: {             
            "ClinicId": event.ClinicId,             
            "Date": event.Date,                    
        } 
    }  
    documentClient.get(params, async function(err, data){
        console.log("inside parent func");
        // Stores number of dentist for given clinic
        let dentists = await numOfDentist(event);
        console.log(dentists);
        if(data.Item == null) {
            console.log("new item created");
            // Adds new record if clinic and date do not exist
            addNewBooking(event, context, callback);       
            callback(err, null);   
            // If record for clinic and date exist   
        }  else if (data.Item) {  
            // loop through entire record
            // check if event.time = data.Item.timeslots[timeval] then store into new array
            // if emails for time < dentists then append
            // else return err
            callback(null, data);
            console.log("added to array");
            console.log(data);
            console.log(JSON.stringify(data));
        } 
    }) 
}

const addNewBooking = function(event, context, callback) {     
    let params = {         
        TableName : "DentistimoBookings",         
        Item: {             
            "ClinicId": event.ClinicId,             
            "Date": event.Date,
            "TimeSlots": [{
                "Time": event.Time,
                "Email": [{
                    "S": event.Email
                }]
            }]                    
        } 
    }  
    documentClient.put(params, function(err, data){          
        if(err) {         
            callback(err, null);
        }     
        callback(null, data);  
    }) 
}

//lines 53-82 written by Julia
const numOfDentist = async function(event) {
    let num = -1;
    let params = {         
        TableName : "DentistimoClinicsTable",         
        Key: {             
            "id": parseInt(event.ClinicId)         
        } 
    }  
    const myResolve = (myParam) => {
        num = myParam;
    }
    const myReject = (myParam) => {
        console.log(myParam);
    }

    await documentClient.get(params)
        .promise()
        .then((data) => {     
            num = -3;
            let number = data.Item.dentists;
            console.log("inside numOfDentist");
            console.log(number);
            myResolve(number);
        }).catch((err) => {
            console.log(err);
            myReject(err);
        });
    // invoking promise obj my calling then to trigger lambda to get val from db
    // then calls res/rej funcs, which trigger handlers depending on res or rej
    return num;
}

const updateBooking = function(event) {  
    // loop through entire record
    let row = { };
    let list = data.Item;

    list.forEach( list => {
        if (row.)
    })
    // check if event.time = data.Item.timeslots[timeval] then store into new array
    // if emails for time < dentists then append
    // else return err
}



/*
1. query record and save into JSON object 
2. for loop to count bookings with a certain time value (if time = event.time [add into array],
    at the end of loop compare array to number of dentist) 
3. if bookings < dentists
4. append booking to JSON object xD
5. if bookings = dentists
6. fufufu

*/