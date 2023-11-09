// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//qxwgotlantdhixoh

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vuong.qnguyen10@gmail.com',
    pass: 'qxwgotlantdhixoh'
  }
});

export default function handler(req, res) {
  switch (req.method) {
    case 'POST': {
      const { name, email, subject, message } = req.body;

      const mailOptions = {
        from: email,
        to: 'vuong.qnguyen10@gmail.com',
        subject: `${email} / ${name} / ${subject}`,
        text: message
      };

      transporter.sendMail(mailOptions, error => {
        if (error) {
          res.status(403)
        } else {
          res.status(200).json({ success: true });
        }
      });
    }
    case 'GET': {
      res.status(200);
    }
  }
}
