const { DynamoDB, S3 } = require('aws-sdk')

exports.handler = async event =>  {
	const Key = event.Records[0].s3.object.key
	console.log('APP-LOG', 'CV-Uploaded', Key)

	const s3 = new S3()
	const cvDoc = await s3.getObject({ bucket: process.env.CV_BUCKET, Key }).promise()
	const cvJson = JSON.parse(cvDoc.Body.toString())

	try {
		const dynamo = new DynamoDB()
		await dynamo.putItem({
			Item: {
				"Name": { S: cvJson.name }, 
				"Skills": { S: cvJson.skills },
			}, 
			TableName: process.env.CANDIDATES_TABLE,
		}).promise()
	} catch (e) {
		console.log('APP-LOG', 'Dynamo PUT error', e)
	} finally {
		console.log('APP-LOG', 'Analyze complete')
	}
}
