const express = require('express');
const app = express(); 
const port = 4000
const controle = require('./controladores/controle')

app.get('/', controle.homePage)
app.get('/sobre', controle.sobrePage)


app.listen(port, () => {
    console.log("Servidor rodando");
}); 

app.get('/componentes/:nome/:cargo/:cor', function (req, res){
    res.send(req.params)
})