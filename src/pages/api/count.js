import { selectAll, write } from 'mongoDB/clientData';

const ENV = process.env.NODE_ENV;

export default async function handler(req, res) {

  switch (`${req.method}`.toLowerCase()) {
    case 'get': {
      const data = await selectAll();
      return res.status(200).json(data);
    }
    case 'post': {
      const body = {
        ...req.headers,

        // TODO: check if get User's IP
        ip: `${req.headers['x-forwarded-for'] || ''}`.split(/, /)[0],
        socket: { remoteAddress: req?.socket?.remoteAddress }
      };
      console.log(body)
      if (ENV === 'production') {
        try {
          write(body);
        } catch (error) {
          console.log(error);
        }
      }

      return res.status(200).json({ success: true, env: ENV === 'production' ? ENV : body });
    }
    default: {
      return res.status(200);
    }
  };
};
