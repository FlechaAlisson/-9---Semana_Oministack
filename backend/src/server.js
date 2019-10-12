const express = require('express');
const routes =  require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');



mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-qo0ip.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
const app = express();


app.use(cors())
app.use(express.json()); //indica pro express usar o json
app.use('/files',express.static(path.resolve(__dirname,'..','uploads')))
app.use(routes); //indica quais rotas e deve vir depois do express.json



app.listen(3333); // A porta que vamo usar