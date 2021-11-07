// Nos permite configurar las variables de entorno y que no den
// problema al utilizar importaciones de modulos al estilo ES6
import './loadEnv.js'
import express from 'express'


// Puerto donde escucha express
const PORT = 11000

// Aplicacion (server) de express
const app = express()


// Servidor de express escuchando en el puerto
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})