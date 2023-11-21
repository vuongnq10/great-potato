// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_ADDRESS,
    pass: process.env.MAIL_KEY
  }
});

export default function handler(req, res) {
  switch (req.method) {
    case 'POST': {
      const { name, email, subject, message } = req.body;

      const mailOptions = {
        from: email,
        to: process.env.MAIL_ADDRESS,
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
      return;
    }
    case 'GET': {
      return res.status(200);
    }
  }
}
