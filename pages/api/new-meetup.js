import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;


    const client = await MongoClient.connect(
      "mongodb+srv://Mamun00339:6oLPceHrOS70XAfx@cluster0.rins048.mongodb.net/meetups?retryWrites=true&w=majority");

      const db = client.db();

      const meetupsCollection = db.collection('meetups');
      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      client.close();

      res.status(201).json({ message: 'Meetup inserted' });
    
  }
}

export default handler;
