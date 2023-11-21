import { MongoClient, ServerApiVersion } from "mongodb";

const DATABASE_NAME = "great_potato";

const client = new MongoClient(process.env.DATABASE_STR, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

client.connect();

export const insert = async ({ data, collection }) => {
  try {
    const database = client.db(DATABASE_NAME);
    const greatePotato = database.collection(collection);
    return await greatePotato.insertOne(data);
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export const select = async ({ query = {}, collection }) => {
  try {
    const database = client.db(DATABASE_NAME);
    const greatePotato = database.collection(collection);
    const data = await greatePotato.find(query).toArray();
    return data;
  } catch (error) {
    console.log(error);
  } finally {
  }
}
