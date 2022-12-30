'use strict'  
const AWS = require('aws-sdk'); 
const documentClient = new AWS.DynamoDB.DocumentClient({region: 'eu-central-1'});
exports.handler = function(event, context, callback) {     
    let queryRecord = {         
        TableName : "DentistimoBookings",         
        Key: {             
            "ClinicId": event.ClinicId,             
            "Date": event.Date,                    
        } 
    }
    
    documentClient.get(queryRecord, async function(err, data){
        // Stores number of dentist for given clinic
        
        let selectedClinic = await getClinicData(event);
        let dentists = selectedClinic.dentists;
        
        console.log( "Num of dentists: " + JSON.stringify(dentists));
        
        let record, newRecord;

        if( data !== null || typeof data != "undefined" ) {
          record = await data.Item;
          if(record == null) {
              console.log("new item created");
              
              // Adds new record if clinic and date do not exist
              newRecord = createNewBooking(event);
              console.log(JSON.stringify(newRecord));                         
              // If record for clinic and date exist   
          } else if (record) {
              
              // record contains the schedule structure for the day
              
              let timeSlots = record.TimeSlots;
              let time = event.Time;
              let bookings = event.Email;
      
              console.log("if record exists" + JSON.stringify(event));
  
              newRecord = updateBooking(record, time, bookings, dentists);
              
              console.log("update booking gave us: " + JSON.stringify(timeSlots));
  
              console.log("this is new record " + JSON.stringify(record));                
          }
          await writeBooking(newRecord);
    
          callback(null, data);
        } else {
            // why is data null or undefined? this is a system error, throw
            // the circuit breaker
            callback(err, null);
        }
    }); 
}

const createNewBooking = function(event) {     
    let newRecord = {                 
      "ClinicId": event.ClinicId,             
      "Date": event.Date,
      "TimeSlots": [{
          "time": event.Time,
          "bookings": [event.Email]
      }]                    
    };  

    return newRecord;
}

const writeBooking = async function(record) {
  let query = {         
    TableName : "DentistimoBookings",         
    Item: record               
}  

  let num = -1;
  const myResolve = (myParam) => {
    num = myParam;
  }

  const myReject = (myParam) => {
      console.log(myParam);
  }

  let writeMe = await documentClient.put(query)
  .promise()
      .then((data) => {     
          console.log(num);
          myResolve(data);
      }).catch((err) => {
          console.log(err);
          myReject(err);
      });
  return writeMe;  
}

const getClinicData  = async function(event) {
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
            let clinic = data.Item;
            myResolve(clinic);
        }).catch((err) => {
            console.log(err);
            myReject(err);
        });
    // invoking promise obj my calling then to trigger lambda to get val from
    // then calls res/rej funcs, which trigger handlers depending on res or rej
    return num;
}

// by ~~*~~ JULIA ~~*~~ <3 E33
//                          |
const updateBooking = function(record, time, email, dentists) {  
    console.log("updateBooking");

    let timeSlots = record.TimeSlots;

    console.log("clinicId: " + JSON.stringify(record.ClinicId) + 
        " ts: " + JSON.stringify(timeSlots) + 
        " payload time: " + JSON.stringify(time) + 
        " payload email: " + JSON.stringify(email) );

    // if there are timeslots on the given day...
    if (timeSlots.length > 0) {
        // check if record for a given time exists
        let found = timeSlots.find(element => element = time);
        
        console.log("found: " + JSON.stringify(found) );
        
        // if time is booked
        if ( (! found || typeof found === "undefined" ) ) {
            // this timeslot is not available
            // send a mail saying the requested date is not available for booking (failed)
            console.log("didn't find the record");
        } else {
            // the timeslot is available, see if it is available
            
            // bookings arrays for this time
            let allBookings = found.bookings
            // number of emails stored within selected time
            let bookings = found.bookings.length
            
            console.log(JSON.stringify(bookings), 
                JSON.stringify(dentists), 
                JSON.stringify(allBookings) );
                
            // compare amount of bookings to num of dentists
            if (bookings < dentists) {
                
                console.log("you are able to add");
                // add email to email array
                
                let newBookings = allBookings.splice(allBookings, 0, email);
                found.bookings = allBookings;
                
                console.log("after splice, record:" + JSON.stringify(found) );
                
                // update newBookings val in entire record
                let foundIndex = record.TimeSlots.indexOf(found);
                
                console.log(
                    "index in time slot" + JSON.stringify(foundIndex) +
                    "new record timeslots" + JSON.stringify(record.TimeSlots) );
                    
                record.TimeSlots[foundIndex] = found;
            } else if (!found) {
                console.log("you cannot add" + JSON.stringify(bookings) );
            }

            console.log(
                "all bookings:" + JSON.stringify(allBookings) +
                "all timeslots:" + JSON.stringify(timeSlots) 
            );
        } 
    }
    // loop through entire record
    return record;
}