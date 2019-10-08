
//importacoes
    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');
    const path = require('path');

    const routes = require('./routes');
    const db = require('../config/db')

// inst objetos
const app = express();

//configura
    //configura para usar json
    app.use(cors())
    app.use(express.json())
    app.use('/files', express.static(path.resolve(__dirname, '..','uploads')))
    app.use(routes)

//mongoose

mongoose.connect(db.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("conectado ao mongo: ")
    }).catch((erro)=>{
        console.log("Erro na conect "+ erro)
    });

//VARIAVEIS
    //const PORT = 8081
    const PORT = process.env.PORT || 3333




//OUTROS
    app.listen(PORT,()=>{
        console.log('Servidor Rodando em: http://localhost:3333/')
    })