require("./models/mongodb");
const express = require("express");
const config = require("config")
const userController = require("./controllers/userController")
const app = express();
const port = 2000;
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/users',userController)
if(!config.get('jwtPrivateKey')){
    console.log(`No PRIVATE KEY`)
    process.exit(0)
}
app.listen(port,()=>console.log(`Server running on port ${port}`))