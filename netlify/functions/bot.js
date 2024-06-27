const handler = () => {
  console.log('Print this message every 5m.');
  return new Response("Ok");
};

export { handler };
