#!/bin/bash
set -ex

aws cloudformation delete-stack \
	--stack-name sam-greeting \
  --region us-east-1
