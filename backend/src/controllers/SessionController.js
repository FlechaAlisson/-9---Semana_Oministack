//index, show, store, update, destroy
//lista, lista1, criar, altera, exclui
const User = require('../models/User')

module.exports = {
    async store(req,res){ //demora um pouco
        const {email}  = req.body; 
        //const user = await User.create({email}); //so vai pra proxima linha se essa instrucao terminar
        
        let user = await User.findOne({email})
        if(!user){// checa se existe
            user =  await User.create({email}); //so vai pra proxima linha se essa instrucao terminar 
        }
        
        
        return res.json(user);
    }

}