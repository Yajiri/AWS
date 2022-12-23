#!/bin/bash

aws cloudformation create-stack --capabilities CAPABILITY_AUTO_EXPAND CAPABILITY_IAM \
--stack-name sentismo \
--template-body file://./src/dentistimo.yaml
