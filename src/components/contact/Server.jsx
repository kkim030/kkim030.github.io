import { createTransport } from "nodemailer";

export default function (req, res) {
  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.elasticemail.com",
    auth: {
      user: "kellylovesdimsum@gmail.com",
      pass: "kellylovesdimsum0_0",
    },
    secure: true,
  });

  const mailData = {
    SecureToken: "eb0d6813-8661-411e-96d3-a9fa17ea334f",
    from: "kellylovesdimsum@gmail.com",
    to: "kellykim0_0@hotmail.com",
    subject: `${req.body.subject}Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log("NOT WORKING");
    else console.log(info);
  });
  res.status(200);
}
