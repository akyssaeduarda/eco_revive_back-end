const prisma = require("../lib/prisma")

module.exports = class companyController {
  static async addCompany(request, response) {
    const {
        comp_name, comp_cnpj, comp_cnae, comp_email, comp_password, comp_phone,
        comp_type, comp_addrress_cep, comp_addrress_road, comp_addrress_number , 
        comp_addrress_district, comp_addrress_city, comp_addrress_state, comp_addrress_complement
    } = request.body;
    
    if(!comp_name || !comp_cnpj ||  !comp_cnae || !comp_email || !comp_password || 
      !comp_phone || !comp_type || !comp_addrress_cep || !comp_addrress_road ||
      !comp_addrress_number || !comp_addrress_district || !comp_addrress_city || 
      !comp_addrress_state || !comp_addrress_complement) {
      return response.status(422).json({message:"campo obrigatório!!"})
    }

    try {
      await prisma.company.create({
        data: {
            comp_name, comp_cnpj, comp_cnae, comp_email, comp_password, comp_phone, comp_type,
            comp_addrress_cep, comp_addrress_road, comp_addrress_number , comp_addrress_district,
            comp_addrress_city, comp_addrress_state, comp_addrress_complement
        }
      })
      return response.status(201).json({ message:"SUCESSO!!" })
    } catch (error) {
      return response.status(422).json({ message:"ERRO!!", error })
    }
  }

  static async getCompany(request, response){
    const company = await prisma.company.findMany({})
    return response.status(200).json({ message: "sucesso!", company })
  }
};