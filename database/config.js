const mongoose = require('mongoose')
const dbConectar = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexion exitosa a la Base de Datos')
    } catch (error) {
        console.log('Nose pudo conectar a la Base de Datos')
        console.log(error)

    }

};

module.exports = {
    dbConectar
}