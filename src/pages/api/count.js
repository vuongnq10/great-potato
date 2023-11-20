import { selectAll, write } from 'mongoDB/clientData';

const ENV = process.env.NODE_ENV;

export default async function handler(req, res) {

  switch (`${req.method}`.toLowerCase()) {
    case 'get': {
      const data = await selectAll();
      return res.status(200).json(data);
    }
    case 'post': {
      const body = req.body;
      // if (ENV === 'production') {
      //   try {
      //     write(body);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // }
      try {
        write(body);
      } catch (error) {
        console.log(error);
      }
      return res.status(200).json({ success: true, env: ENV });
    }
    default: {
      return res.status(200);
    }
  };
};
