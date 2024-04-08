// @ts-ignore:next-line
import { selectAll, write } from 'mongoDB/clientData';

const ENV = process.env.NODE_ENV;

export default async function handler(req, res): Promise<any> {

  switch (`${req.method}`.toLowerCase()) {
    case 'get': {
      const data = await selectAll();
      return res.status(200).json(data);
    }
    case 'post': {
      const body = {
        ...req.headers,
        ...req.body || {},
        ip: `${req.headers['x-forwarded-for'] || ''}`.split(/, /)[0],
        socket: { remoteAddress: req?.socket?.remoteAddress },
        date: `${new Date()}`
      };
      const onwer = `${req?.headers?.cookie}`.indexOf("onwer=1") > -1;

      if (ENV === 'production') {
        try {
          const result = await write(body);
          return res.status(200).json({ success: result?.acknowledged || false });
        } catch (error) {
          if (onwer) {
            return res.status(200).json(error);
          }
        }
      } else {
        return res.status(200).json(body);
      }

    }
    default: {
      return res.status(200);
    }
  };
};
