#!/bin/bash

if [ -d "build" ]
then
    rm -rf build
fi 
mkdir build
cd build

zip BookAppointmentDDB.zip ../src/bookAppointmentDDB/index.js
zip BookAppointmentEB.zip ../src/bookAppointmentEB/index.js
zip GetClinics.zip ../src/getClinics/index.js
zip GetClinic.zip ../src/getClinic/index.js
zip GetSchedule.zip ..src/getSchedule.index.js


aws s3 cp bookAppointmentDDB.zip s3://dentistimogbg
aws s3 cp bookAppointmentEB.zip s3://dentistimogbg
aws s3 cp getClinic.zip s3://dentistimogbg
aws s3 cp getClinics.zip s3://dentistimogbg
aws s3 cp getSchedule.zip s3://dentistimogbg
