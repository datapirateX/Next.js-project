import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://Mamun00339:vAWfei22V8JLeKpZ@cluster0.rins048.mongodb.net/meetups?retryWrites=true&w=majority");

      const db = client.db();

      const meetupsCollection = db.collection('meetups');
      const result = await meetupsCollection.insertOne(data);

      console.log(result);
    
  }
}

export default handler;
