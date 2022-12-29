'use strict'
const AWS = require('aws-sdk');

//AWS.config.Update({ region: "eu-central-1"});

exports.handler = async(event, context, callback) => {
    const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08"});
    let newEntry={};
    let timeSlotsAvailability = {};

    const paramsBooking = {
        TableName : "DentistimoBookings",         
        Key: {             
            ClinicId: {
                S: event.pathParameters.clinicId 
                },             
            "Date":{ 
                N: event.pathParameters.date 
            },
        } 
    }; 
    
    // const paramsBooking = {
    //     TableName : "DentistimoV2-DentistimoScheduleAppointmentsTable-PF9T2SNRLUT9",         
    //     Key: {             
    //         ClinicId: {
    //             S: event.ClinicId
    //             },             
    //         "Date":{ 
    //             S: event.Date
    //         },
    //     } 
    // };
    
    const paramsClinic = { TableName: "DentistimoClinicsTable",
    Key: {
        id:{
            N:event.pathParameters.clinicId 
        },
    }
        
    }
    const responseBooking  = await ddb.getItem(paramsBooking).promise();
    const responseClinic = await ddb.getItem(paramsClinic).promise();

    if(JSON.stringify(responseBooking)=="{}") {
        
        let openingHoursForDay
        const openingHours = responseClinic.Item.openinghours.M
        console.log(openingHours)
        
        const y = event.pathParameters.date.slice(0,4)
        const m = event.pathParameters.date.slice(4,6)
        const d = event.pathParameters.date.slice(6,8)
        
        const ymd = y + "-" + m + "-" + d
        
        const date = new Date(ymd)
        const weekday = date.getDay()
        
        switch (weekday) {
            case 1:
                openingHoursForDay = openingHours.monday.S
            break;
            
            case 2:
                openingHoursForDay = openingHours.tuesday.S
            break;
            
            case 3:
                openingHoursForDay = openingHours.wednesday.S
            break;
            
            case 4:
                openingHoursForDay = openingHours.thursday.S
            break;
            
            case 5:
                openingHoursForDay = openingHours.friday.S
            break;
  
        }
        let hours = openingHoursForDay.split(":")
        let startH = parseFloat(hours[0])
        console.log(startH)
        hours = openingHoursForDay.split("-")
        const endH = parseFloat(hours[1].split(":")[0])
       
        let i = 0
        let timeSlots=[]
        let t = ""
        
        while(startH <= endH - 0.5) {
            t = parseInt(startH)
            if(startH % 1 === 0.5)
                 t += ":30"
            else
                 t += ":00" 
            //timeSlots[i] = { time:t, available:true}
            
            if(t!=="14:30" && t!=="12:00" && t!=="12:30"){
                timeSlots[i] = {"time":t, "available":true}
                i++
            }
 
            startH += 0.5
        }
        
        newEntry = {
            clinicId: event.pathParameters.clinicId,
            date: event.pathParameters.date,
            timeSlots: timeSlots
            }
        console.log(newEntry)
        
        return {
            statusCode : 200,
            headers: {
                "Content-Type" : "application/json",
                    "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
                    "Access-Control-Allow-Methods" : "OPTIONS,GET",
                    "Access-Control-Allow-Credentials" : true,
                    "Access-Control-Allow-Origin" : "",
                    "X-Requested-With" : "*"
            },
            body: newEntry
        
        };
            
    } else if(JSON.stringify(responseBooking)===null) {
        console.log("get booking response is null")
    } else {
        
        const t = responseBooking.Item.TimeSlots.L
        const slots = []
        let i = 0
        console.log("dentists" + responseClinic.Item.dentists.N)
        t.forEach(slot => {
            const bookings = slot.M.bookings.L
            // console.log(bookings)
            // console.log(bookings.length)
            
            
            if(bookings.length < responseClinic.Item.dentists.N){
                slots[i] = {"time":slot.M.time.S, "available":true}
                i++
            } else {
                console.log(slot.M.time.S)
                slots[i] = {"time":slot.M.time.S, "available":false}
                i++
            }
        })
        timeSlotsAvailability = {
            clinicId: event.pathParameters.clinicId ,
            date: event.pathParameters.date,
            timeSlots: slots
            }
        return {
            statusCode : 200,
            headers: {
                "Content-Type" : "application/json",
                    "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
                    "Access-Control-Allow-Methods" : "OPTIONS,GET",
                    "Access-Control-Allow-Credentials" : true,
                    "Access-Control-Allow-Origin" : "",
                    "X-Requested-With" : "*"
            },
            body: timeSlotsAvailability
        
        };
    }

}

