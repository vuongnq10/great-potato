import { MongoClient, ServerApiVersion } from "mongodb";

const DATABASE_NAME: string = "great_potato";

const client = new MongoClient(`${process.env.DATABASE_STR}`, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

client.connect();

export const insert = async (params: any): Promise<any> => {
  const { data, collection } = params;
  try {
    const database = client.db(DATABASE_NAME);
    const greatePotato = database.collection(collection);
    return await greatePotato.insertOne(data);
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export const select = async (params: any): Promise<any> => {
  const { query = {}, collection } = params;
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
