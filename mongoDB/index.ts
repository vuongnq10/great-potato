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
  const { data, collection, databaseName = '' } = params;
  try {
    // const database = client.db(databaseName || DATABASE_NAME);
    // const greatePotato = database.collection(collection);
    // return await greatePotato.insertOne(data);
    return await client.db(databaseName || DATABASE_NAME).collection(collection).insertOne(data);
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export const select = async (params: any): Promise<any> => {
  const { query = {}, collection, databaseName = '' } = params;
  try {
    // const database = client.db(databaseName || DATABASE_NAME);
    // const greatePotato = database.collection(collection);
    // const data = await greatePotato.find(query).toArray();
    // return data;
    return client.db(databaseName || DATABASE_NAME).collection(collection).find(query).toArray();
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export const selectOne = async (params: any): Promise<any> => {
  const { query = {}, projection = {}, options = {}, databaseName, collection } = params;
  try {
    return client.db(databaseName || DATABASE_NAME).collection(collection).findOne(query, projection);
  } catch (error) {
    console.log(error);
  }
}
