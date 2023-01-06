#!/bin/bash


if [ -d "build" ]
then
    rm -rf build
fi 
mkdir build
cd build
zip BookAppointmentDDB.zip ../src/BookAppointmentDDB/index.js
zip BookAppointmentEB.zip ../src/BookAppointmentEB/index.js
zip GetClinic.zip ../src/GetClinic/index.js
zip GetClinics.zip ../src/GetClinics/index.js
zip GetSchedule.zip ../src/GetSchedule/index.js

aws s3 cp BookAppointmentDDB.zip s3://dentistimo
aws s3 cp BookAppointmentEB.zip s3://dentistimo
aws s3 cp GetClinic.zip s3://dentistimo
aws s3 cp GetClinics.zip s3://dentistimo
aws s3 cp GetSchedule.zip s3://dentistimo
