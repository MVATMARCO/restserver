const express = require('express');
const { router } = require('../routes/auth');
const { produc } = require('../routes/producto');
const { catego } = require('../routes/categoria')
    //const app = express();
const { dbConectar } = require('../database/config');


class Server {
    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = ('/usuarios');
        this.authPath = ('/auth');
        this.produPath = ('/producto')
        this.catePath = ('/categoria')
        this.middlewares();
        this.routes();
        this.dbConexion();

    }
    async dbConexion() {
        await dbConectar()

    }
    middlewares() {
        //Servir Carpeta piblica
        //this.app.use(express.static('public'));
        //Permitir que el body obtenga desde un json
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json());
    }
    routes() {
        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.usuariosPath, require('../routes/user'));
        this.app.use(this.produPath, require('../routes/producto'));
        this.app.use(this.catePath, require('../routes/categoria'))

    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el servidor', this.port)

        })
    }
}
module.exports = Server;