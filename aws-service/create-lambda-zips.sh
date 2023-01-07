#!/bin/bash

if [ -d "build" ]
then
    rm -rf build
fi 
mkdir build
cd build

zip bookAppointmentDDB.zip ../src/bookAppointmentDDB/index.js
zip bookAppointmentEB.zip ../src/bookAppointmentEB/index.js
zip getClinics.zip ../src/getClinics/index.js
zip getClinic.zip ../src/getClinic/index.js
zip getSchedule.zip ..src/getSchedule.index.js


aws s3 cp bookAppointmentDDB.zip s3://dentistimo
aws s3 cp bookAppointmentEB.zip s3://dentistimo
aws s3 cp getClinic.zip s3://dentistimo
aws s3 cp getClinics.zip s3://dentistimo
aws s3 cp getSchedule.zip s3://dentistimo
