const prisma = require('../lib/prisma')
const jwt = require("jsonwebtoken");

module.exports = class authUserController {
  static async loginUser(request, response) {
    const { user_email, user_password } = request.body;

    const user = await prisma.user.findFirst({ where: { user_email: user_email } });
    if (!user) {
      return response.status(422).json({ message: "email inválido!" });
    }

    const validatePassword = await prisma.user.findFirst({ where: { user_password } });
    if (!validatePassword) {
      return response.status(422).json({ message: "senha inválida!" });
    }

    try {
      const token = jwt.sign(
        {
          user_id: user.user_id,
          user_name: user.user_name,
        },
        "user",
        {
          expiresIn: "30 days",
        }
      );
      return response.status(200).json({ token });
    } catch (error) {
      return response.status(422).json({ error });
    }
  }
};
