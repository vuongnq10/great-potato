const { schedule } = require('@netlify/functions');
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

const handlerSol = schedule('*/5 * * * *', async () => {
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
  if (result.direction !== 'none') {
    insert({ data });
    console.log(data)
  }
});

const handlerSEI = schedule('*/5 * * * *', async () => {
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
  if (result.direction !== 'none') {
    insert({ data });
    console.log(data)
  }
});

const bbSol = schedule('*/5 * * * *', async () => {
  const { input } = await getDetachSourceFromOHLCV('binance', 'SOL/USDT', '15m', false);
  const price = await ticker('binance', 'SOL/USDT');

  let bbData = await bbCheck(50, 2, input);
  insert({
    data: {
      ...bbData,
      ticket: "SOL/USDT",
      type: "bbCheck",
      price
    }
  });
});

export { handlerSol, handlerSEI, bbSol }
