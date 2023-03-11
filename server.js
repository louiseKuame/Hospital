import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'


import database from './connexion.js'
// Les routes ici  (cela va creer les tables automatiquement)

//Creation des tables
database.sync()


// const PORT = dotenv.config().parsed.PORT
const PORT = process.env.PORT

// console.log('ENV',dotenv.config().parsed)

const app = express()

app.use(helmet())
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Utiliser les routes ici



app.listen(PORT, () => console.log(`Serveur running on port ${PORT}`))
