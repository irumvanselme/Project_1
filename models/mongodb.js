const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat2revision",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(()=>console.log(`Connected to db successfully`))
    .catch(err=>console.log(err))

require("./users.model")
require("./post.model")