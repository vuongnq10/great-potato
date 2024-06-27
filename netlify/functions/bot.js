const handler = () => {
  console.log('Print this message every 5m.');
  return {
    statusCode: 202,
  };
};

export { handler };
