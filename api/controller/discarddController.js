const Discardd = require('../entity/discardd')
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
        console.log(decodedToken)
        console.log(userId)
        if (!userId) {
          return response.status(401).send({ message: "Unauthorized. Please log in." });
        }
      await Discardd.create({
        disc_item, disc_address, disc_date, disc_responsible_name, disc_status, id_user: userId 
      })
      return response.status(201).json({ message:"SUCESSO!!" })
    } catch (error) {
      console.log(error)
      return response.status(422).json({ message:"ERRO!!" })
    }
  }

};

