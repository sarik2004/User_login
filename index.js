require("dotenv").config();
const sequelize = require('./src/database/connection')
const UserRouts = require('./src/routes/userRouts')
const express = require("express")
const cors = require("cors")
const app = express();
app.use(express.json()); 
app.use(cors());


UserRouts(app);

sequelize.sync({alter:false})
.then(()=>{
    console.log( "Tables created automatically");
})
.catch((erro)=>{
    console.log(erro);
})

const PORT = process.env.PORT||3000
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
    
})