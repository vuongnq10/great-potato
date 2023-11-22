const { bbCheck, ticker, kstCross, getDetachSourceFromOHLCV } = require('trading-indicator');
const { MongoClient, ServerApiVersion } = require('mongodb');

const DATABASE_NAME = "trading";
const client = new MongoClient(process.env.DATABASE_STR, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

client.connect();

const insert = async ({ data }) => {
  try {
    const database = client.db(DATABASE_NAME);
    const greatePotato = database.collection('SOLUSDT');
    return await greatePotato.insertOne(data);
  } catch (error) {
    console.log(error);
  } finally {
  }
}

const handlerSol = async () => {
  const { input } = await getDetachSourceFromOHLCV('binance', 'SOL/USDT', '5m', false);
  const result = await kstCross(input, 10, 15, 20, 30, 10, 10, 10, 15, 9);
  const price = await ticker('binance', 'SOL/USDT');

  const data = {
    action: result.direction === 'up' ? 'buy' : 'sell',
    price: price.info.askPrice,
    at: new Date(),
    ticket: 'SOL/USDT',
    typ: "kstCross"
  }
  console.log(data)
  if (result.direction !== 'none') {
    insert({ data });
  }
}

const handlerSEI = async () => {
  const { input } = await getDetachSourceFromOHLCV('binance', 'SEI/USDT', '5m', false);
  const result = await kstCross(input, 10, 15, 20, 30, 10, 10, 10, 15, 9);
  const price = await ticker('binance', 'SEI/USDT');

  const data = {
    action: result.direction === 'up' ? 'buy' : 'sell',
    price: price.info.askPrice,
    at: new Date(),
    ticket: 'SEI/USDT',
    typ: "kstCross"
  }
  console.log(data)
  if (result.direction !== 'none') {
    insert({ data });
  }
}

const bbSol = async () => {
  const { input } = await getDetachSourceFromOHLCV('binance', 'SOL/USDT', '15m', false);
  const price = await ticker('binance', 'SOL/USDT');

  let bbData = await bbCheck(50, 2, input);
  const data = {
    ...bbData,
    ticket: "SOL/USDT",
    type: "bbCheck",
    price
  }
  console.log(data)
  insert({ data });
}

const handler = () => {
  handlerSol();
  handlerSEI();
  bbSol();
}

module.exports = { handler }
