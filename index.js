const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/index');

dotenv.config();

const app =  express();
app.use(cors());
app.use(express.json());
app.use(routes);

 const connectDB =  async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Conectado ao MongoDB com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:',  error);
    }
};

connectDB();

app.listen(process.env.PORT, ()=> {
    console.log('servidor rodando na porta', process.env.PORT);
});