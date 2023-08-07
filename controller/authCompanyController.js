const prisma = require("../lib/prisma")
const jwt = require("jsonwebtoken");

module.exports = class authCompanyController {
  static async loginCompany(request, response) {
    const { comp_email, comp_password } = request.body;

    const company = await prisma.company.findFirst({ where: { comp_email: comp_email },});
    if (!company) {
      return response.status(422).json({ message: "email inválido!" });
    }
    const validatePassword = await prisma.company.findFirst({ where: { comp_password },});
    console.log(company);
    if (!validatePassword) {
      return response.status(422).json({ message: "senha inválida!" });
    }

    try {
      const token = jwt.sign(
        {
          comp_id: company.comp_id,
          comp_name: company.comp_name,
        },
        "company",
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
