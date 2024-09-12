const app = require('./app');
const connectMongo = require('./app/utils/dbConnect');
require('dotenv').config();

const PORT = process.env.PORT;

connectMongo();

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:3000`);
    console.log("Hello World!");
})



