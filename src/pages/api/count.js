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
      const onwer = `${req?.headers?.cookie}`.indexOf("onwer=1") > -1;

      try {
        const result = await write(body);
        return res.status(200).json({ success: result?._id && true });
      } catch (error) {
        if (onwer) {
          return res.status(200).json(error);
        }
      }
    }
    default: {
      return res.status(200);
    }
  };
};
