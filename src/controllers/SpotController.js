const Spot = require('../models/Spot')
const User = require('../models/Usuario')


module.exports={
    //metodo index para retornar uma lista de spot
    async index(req, res){
        const {tech} = req.query;
        //console.log('chegou', tech)
        const spots = await Spot.find({techs: tech})

        return res.json(spots);
    },


    //metodo store para criar o registro no db
    async store(req,res) {
        const{filename} = req.file;
        const{ company, techs, price} = req.body;
        const{user_id} = req.headers;

        const user = await User.findById(user_id);

        if (!user){
            return res.status(400).json({error: 'Usuario não existe'})
        }
        console.log(req.body)
        console.log(req.file)
        console.log(user_id)

        const spot = await Spot.create({
            user : user_id,
            thumbnail: filename,
            // percorre a string separa por vigulas e .trim() retira os espaços 
            //no inicio e fim
            // transformando a string em array
            techs: techs.split(',').map(tech => tech.trim()), 
            company,
            price
        })
        return res.json(spot);
    }
}