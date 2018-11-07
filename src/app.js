var express = require('express');
var path = require('path');
var app = express();
var router = express.Router();

//Configuraciones

app.set('port',process.env.PORT || 8887);                   // Puerto de operación de la aplicación
app.set('view engine','ejs');                               //Configuración del motor de vistas
app.set('views', path.join(__dirname, 'views'));            //Directorio donde están las vistas
app.use(express.json());                                    //Cuerpo de petición y respuesta en formato json
app.use(express.urlencoded({extended: false}));             //Codificación en la url omitida
app.use(express.static(path.join(__dirname, 'public')));    //Ruta de archivos estáticos

//Middleware

//Rutas
router.get('/',(req,res) => {
    res.render('index',{
        pageTitle:'Inicio'
    });
});
app.use(router);
module.exports = app;
