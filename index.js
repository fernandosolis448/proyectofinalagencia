const express =require("express"),
app = express(),
puerto = process.env.PORT || 4321,
mysql = require("mysql"),
bodyParser = require("body-parser"),
myConnection = require("express-myconnection"),
db = require("./database").config;
clienteRoutes = require("./routes/cliente");
autoRoutes = require("./routes/auto");
validacionRoutes = require("./routes/validacion");

app.use(bodyParser.urlencoded({extended:true}));
app.use(myConnection(mysql, db));
app.use("/cliente", clienteRoutes);
app.use("/auto", autoRoutes);
app.use("/validacion", validacionRoutes);

app.listen(puerto, err => {
    if(err){
        console.log(`Tenemos error ${err}`);
    }
    else{
        console.log(`Todo bien en el puerto ${puerto}`);
    }
})