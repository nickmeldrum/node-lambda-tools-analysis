#!/bin/bash
set -xe

aws s3api list-objects --bucket nick-s3triggertest
aws s3api put-object --bucket nick-s3triggertest --key input-test1.json --body test-data.json
aws s3api list-objects --bucket nick-s3triggertest
