import { S3, DynamoDB } from "aws-sdk";

const ddb = new DynamoDB({});
const s3 = new S3({});
const getBundle = async (event, context) => {
  console.log("hello there");
  return { body: JSON.stringify(event) };
  // return args
};
const addBundle = async (event, context) => {};
const listBundles = async (event, context) => {
  const params = { Bucket: process.env.BundleBucket };
  console.log("params", JSON.stringify(params, null, 2));
  // return null;
  try {
    const objects = await s3.listObjects(params).promise();
    console.log("We're good to go");
    return { statusCode: 200, body: JSON.stringify(objects) };
  } catch (e) {
    console.log("Here is the error my good friend", e);
    throw e;
  }
};
export { getBundle, addBundle, listBundles };
