import { createTransport } from "nodemailer";

const send = async ({ mail, subject = "Muchas gracias por registrarte", message:html }) => {
  try {
    console.log("desde: ",process.env.MAIL_USER);
    // HTTPS -> sacar verificacion en 2 pasos
    // permitir a gmail acceso a aplicaciones poco seguras
    const transporter = createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      service: process.env.MAIL_SERVICE,
      auth: {
       // type: "OAuth2",
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const info = {
      to: mail,
      subject,
      html,
    };
    const { messageId } = await transporter.sendMail(info);
  
    return messageId;
  } catch (e) {
    console.log(e);
  }
};

export default { send };
