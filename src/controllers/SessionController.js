//metodos do controller
/*
index, show, store, update, destroy
*/
const User = require('../models/Usuario')


module.exports={
    async store(req,res) {
        const {email} = req.body
        let user = await User.findOne({email : email})
        if(!user){
            user = await User.create({email})
                .catch((erro)=>{
                    console.log("registro não criado ", erro)
                })
            console.log("registro criado")
        }else{
            console.log("usuario ja existe")
        }
        return res.json(user);
    }
}