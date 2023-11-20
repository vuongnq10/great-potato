import { MongoClient, ServerApiVersion } from "mongodb";

const DATABASE_NAME = "great_potato";

const client = new MongoClient(process.env.DATABASE_STR, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const insert = async ({ data, collection }) => {
  try {
    await client.connect();
    const database = client.db(DATABASE_NAME);
    const greatePotato = database.collection(collection);
    await greatePotato.insertOne(data);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

export const select = async ({ query = {}, collection }) => {
  try {
    await client.connect();
    const database = client.db(DATABASE_NAME);
    const greatePotato = database.collection(collection);
    const data = await greatePotato.find(query).toArray();
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}
