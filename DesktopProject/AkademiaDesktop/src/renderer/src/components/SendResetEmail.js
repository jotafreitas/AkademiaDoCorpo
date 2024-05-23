const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
  host: "smtp.gmail.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: 'pedroca2787@gmail.com',
    pass: 'rfmqaghndwnipbjg',
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: ' <maddison53@ethereal.email>', // sender address
    to: "joaocarlosenac@gmail.com", // list of receivers
    subject: "Restaurar Senha", // Subject line
    html: "<b>Vencimento Proximo</b><br/><p>Pedrin ta devendo, peidaro na academia</p>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);