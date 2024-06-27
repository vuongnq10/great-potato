// const { schedule } = require('@netlify/functions');

// const handler = schedule("*/5 * * * *", () => {
//   console.log('Print this message every 5m.')
// });

// export default handler;

const handler = () => {
  console.log('Print this message every 5m.');
  return {
    statusCode: 200,
  };
};

export { handler };
