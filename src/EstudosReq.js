
//importacoes
const express = require('express');

// inst objetos
const app = express();

//configura
    //configura para usar Json
    app.use(express.json())


//VARIAVEIS
    //const PORT = 8081
    const PORT = process.env.PORT || 3333


//rotas 
    /*
    pode ser 
    GET = Buscar informação,
    POST = Para criar umanova informação, 
    PUT = Edita alguma informação, 
    DELETE = Deketar, 
    etc 
    */

    /*
    req.query = acessa query parametros = http://localhost:3333/?idade=20
    req.params = acessa route = '/put/:id' onde o id eh enviado na rota
    reqy.body = acessa corpo da requisição (Json)
    */
        app.get('/', (req, res) =>{
            return res.json({message:'Ola Mundo!!!!', 
                            idade: req.query.idade})
        });

        
        app.post('/usersteste', (req, res) =>{
            return res.json(req.body);
        });

        app.put('/put/:id', (req, res) =>{
            return res.json({ id: req.params.id})
        });

//OUTROS
    app.listen(PORT,()=>{
        console.log('Servidor Rodando em: http://localhost:3333/')
    })