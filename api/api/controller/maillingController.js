const nodemailer = require("nodemailer");

module.exports = class MailController {
  static async sendMail(request, response) {
    console.log(request.body);
    const { name, email, subject, message } = request.body;

    // Verifica se os campos estão preenchidos
    if (!name || !email || !subject || !message) {
      return response
        .status(400)
        .json({ message: "Preencha todos os campos!" });
    }

    // criar um objeto transportador reutilizável usando o transporte SMTP padrão
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "ecoreviverecife@gmail.com",
        pass: "dbdcqsrhjxmkdgtc",
      },
      secure: true,
    });

    const mailData = {
      from: email,
      to: "ecoreviverecife@gmail.com",
      subject: subject,
      text: message,
      html: "<b>Hey there! It works!</b>", // html body
    };

    // Envia o email
    transporter.sendMail(mailData, (error, info) => {
      if (error) {
        console.log(error);
        console.log(info)
        return response.status(500).json({ message: "Erro ao enviar email!" });
      }
      res
        .status(200)
        .send({
          message: "Email enviado com sucesso!",
          message_id: info.messageId,
        });
    });
  }
};
