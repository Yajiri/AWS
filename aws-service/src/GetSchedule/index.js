'use strict'
const AWS = require('aws-sdk');

//AWS.config.Update({ region: "eu-central-1"});

exports.handler = async(event, context, callback) => {
    const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08"});
    let newEntry={};

    const paramsBooking = {
        TableName : "DentistimoBookings",         
        Key: {             
            ClinicId: {
                S: event.ClinicId
                },             
            "Date":{ 
                S: event.Date
            },
        } 
    };
    
    const paramsClinic = { TableName: "DentistimoClinicsTable",
    Key: {
        id:{
            N:event.ClinicId
        },
    }
        
    }
    const responseBooking  = await ddb.getItem(paramsBooking).promise();
    const responseClinic = await ddb.getItem(paramsClinic).promise();

    if(JSON.stringify(responseBooking)=="{}") {
        
        let openingHoursForDay
        const openingHours = responseClinic.Item.openinghours.M
        console.log(openingHours)
        
        const y = event.Date.slice(0,4)
        const m = event.Date.slice(4,6)
        const d = event.Date.slice(6,8)
        
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
            if(t!=="14:30" && t!=="12:00" && t!=="12:30"){
                timeSlots[i] = {"time":t, "available":true}
                i++
            }
 
            startH += 0.5
        }
        
        newEntry = {
            clinicId: event.ClinicId,
            date: event.Date,
            timeSlots: timeSlots
            }
        console.log(newEntry)
            
    } else if(JSON.stringify(responseBooking)===null) {
        console.log("get booking response is null")
    }

}