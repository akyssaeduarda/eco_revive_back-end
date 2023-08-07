const prisma = require('../lib/prisma')
const jwt = require("jsonwebtoken")

module.exports = class discarddController {
  static async addDiscardd(request, response) {
    const {disc_item, disc_address, disc_date, disc_responsible_name, disc_status} = request.body;
    
    if(!disc_item || !disc_address || !disc_date || !disc_responsible_name || !disc_status ) {
      return response.status(422).json({message:"campo obrigatório!!"})
    }
    const token = request.headers.authorization;
    
    try {
        const decodedToken = jwt.verify(token, 'user');
        
        const userId = decodedToken.user_id;

        if (!userId) {
          return response.status(401).send({ message: "Unauthorized. Please log in." });
        }
      
        await prisma.discard.create({
            data: {
                disc_item, 
                disc_address, 
                disc_date, 
                disc_responsible_name, 
                disc_status, 
                userUser_id: userId
            } 
        })
      
        return response.status(201).json({ message:"SUCESSO!!" })
    } catch (error) {
        return response.status(422).json({ message:"ERRO!!", error })
    }
  }

};

