const prisma = require('../lib/prisma')

module.exports = class userController {
  static async addUser(request, response) {
    const {user_name, user_email, user_password, user_phone, user_addrress_cep, 
        user_addrress_road, user_addrress_number , user_addrress_district, user_addrress_city,
        user_addrress_state, user_addrress_complement} = request.body;
    
    if(!user_name || !user_email ||  !user_password || !user_phone || !user_addrress_cep ||
       !user_addrress_road || !user_addrress_number  || !user_addrress_district || 
       !user_addrress_city || !user_addrress_state || !user_addrress_complement) {
      return response.status(422).json({message:"campo obrigatório!!"})
    }
    
    try {
      const user = await prisma.user.create({
        data: {
          user_name,
          user_email,
          user_password,
          user_phone,
          user_addrress_cep,
          user_addrress_road,
          user_addrress_number,
          user_addrress_district,
          user_addrress_city,
          user_addrress_state,
          user_addrress_complement
        }
      })
      return response.status(201).json({ message:"SUCESSO!!", user })
    } catch (error) {
      return response.status(422).json({ message:"ERRO!!", error })
    }
  }

};
