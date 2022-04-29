const mongoose = require("mongoose");
const uri = "mongodb+srv://admin:admin@cluster0.3brqy.mongodb.net/atividade?retryWrites=true&w=majority";
mongoose.connect(uri, {});