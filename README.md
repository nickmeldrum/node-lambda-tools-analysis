# An analysis of node lambda deployment tools

Up for analysis:

 * CloudFormation (https://aws.amazon.com/cloudformation/)
 * Serverless Application Model (SAM) (https://github.com/awslabs/serverless-application-model)
 * Terraform (https://www.terraform.io/)
 * Serverless Framework (https://serverless.com/)
 * Netlify (https://www.netlify.com/)
 * Claudia.js (https://claudiajs.com/)
 * ZEIT's Now (https://zeit.co/now)

Others? (worthy mentions?):

 * Apex (https://apex.run/)
 * Up (https://github.com/apex/up)
 * Architect (https://arc.codes/)
 * faast.js (https://faastjs.org/)
 * pulumi?
 * packer
 * sceptre (https://github.com/cloudreach/sceptre)

## Considerations for discussion

 * Vendor lock-in ( https://www.theregister.co.uk/2017/11/06/coreos_kubernetes_v_world/ https://lumigo.io/blog/you-are-wrong-about-serverless-vendor-lock-in/ )
 * Maturity/ opinionated/ customizable/ cloud agnostic/ cost/ configuration based or configuration free/ focused on what AWS resources you can configure?

## Research:

 * https://serverless.com/learn/comparisons/ (serverless framework sales tool of course)
 * https://github.com/awslabs/aws-cdk - what is the AWS Cloud Development Kit
 * https://lumigo.io/blog/comparison-of-lambda-deployment-frameworks/
 * https://serverless-stack.com/

 "Building and deploying serverless JS"

 An overview of some of the options out there for building a cloud native backend in JavaScript minimising effort and maintenance. There are an awful lot of options out there from "Define everything yourself" AWS Cloudformation or Terraform at 1 end of the spectrum 

abstract:

"Serverless platforms offer the promise of providing a simpler model for hosting an application in the cloud. The ecosystem is still immature and evolving at a frightening pace. This talk will be an overview of where we are currently, focused on AWS, but exploring the various options out there for making the building, deployment and maintenance of your application simpler."


## Talk structure

 * what
 * who
 * why
 * how

 * apologies: all about aws... there are other megacorp cloud providers out there!

 * what
   (https://serverless-stack.com/chapters/what-is-serverless.html)
   (https://martinfowler.com/articles/serverless.html)
   * what is serverless?
     * depends on your context:
       * could mean "FAAS": aws lambda/ GCP cloud functions/ azure functions
       * could mean "managed services": aws cognito, dynamodb, sns, sqs, appsync, cloudfront, api gateway etc. etc. - i.e. you can create a whole backend without having to manage a single server/ ec2 instance
       * confusingly could mean "the serverless framework" - a cloud deployment framework that is cleverly calling themselves "serverless" from a branding perspective
      * (TODO: check that lambda/terraform youtube talk for good description - bookmarked on home macbook?)
   * what is lambda?
 * who (image ideas: megacorp)
   * cloud providers:
     * aws lambda (what we will be focusing on
     * GCP cloud functions
     * Azure functions
     * Qinling (OpenStack) (extra image idea: hippy? something less pejorative?)
 * why
   * history of hosting applications:
     * old days: server in the office server room - make sure you don't kick the power supply on the way out! - system down!
     * data centers: I still buy the server, manage the hardware, manage the OS, manage the services, do the patching, pay for and manage all licenses, manage hack attacks etc. etc.
     * cloud 1.0 comes along: VPS - now I don't have to manage my hardware - yay! - still have to patch the OS, manage services, manage license, manage hacks etc.
     * cloud 2.0 comes along: "compute instances" (otherwise known as EC2!) - now I don't have to manage
     * TODO ^ above is wrong about VPS/ EC2 - also continue with v3 - what is serverless above ec2?
     * then mention containers/k8s?
 * how

 * brief overview of aws resources you might use with lambda
 * some interesting use cases of lambda
   * server rendering
   * chat bots
   * alexa apps?
   * web app workers
   * full on web backends?
 * examples of provisioning lambda backends using javascript
 * wider discussion on other provisioning methodologies

 * sum up


### Claudia

What is claudiajs?

deploy a node lambda using javascript.
very low boilerplate and low concept count.
very limited in what aws resources you can manage with it.

Great for a very simple (or focused in terms of resource usage) project.
Basically allows you to:
 1. deploy a lambda
 2. route web traffic to it through api gateway
 3. helpers to connect a lambda to chatbot interfaces

A look at claudia:

claudia tutorial: https://claudiajs.com/tutorials/installing.html
export AWS_PROFILE=claudia
check out using IAM?


whats it's sweet spot?

"Use API Gateway as it if were a lightweight JavaScript web server"
super super simple if you just want "a function in the cloud"
good for chat bots - it has a bot builder built in

open source
good responses to issues

local story: unit tests only - integration tests etc. - deploy to cloud - luckily deployment is quick and simple

### Serverless framework


