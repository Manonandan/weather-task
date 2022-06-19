# weather-task

### Task:
- Create an AWS Lambda using a serverless framework.
- Create an API using API Gateway that takes the below JSON as input. The API will trigger lambda and pass the input to lambda.
- Lambda should read the data from the input and store it in MongoDB.
- You will need to create corresponding Schemas and Tables for MongoDB.

### Prerequisite
1. [NodeJS](https://nodejs.org/en/, "nodejs") 
> sudo apt install nodejs
3. [Serverless](https://www.serverless.com/, "serverless")
> sudo npm install -g serverless
4. [AWS](https://aws.amazon.com/, "aws")
5. [MongoDB](https://www.mongodb.com/, "MongoDB")


### AWS setup
1. Create aws account
2. Create IAM user - To create aws services using serverless framework
    - Permissions
        - AmazonS3FullAccess
        - CloudWatchFullAccess
        - AmazonAPIGatewayAdministrator
        - AWSCloudFormationFullAccess 
        - AWSLambda_FullAccess 
4. Create IAM role - To execute lambda function
    - Permissions
        - CloudWatchLogsFullAccess: To create CloudWatch log stream from Lambda function


### Serverless commands
> serverless create -t aws-nodejs \
> serverless config credentials --provider aws --key {key} --secret {secret} --overwrite \
> serverless deploy \
> serverless remove

