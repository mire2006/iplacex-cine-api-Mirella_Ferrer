import express, { urlencoded } from 'express'
import cors from 'cors'

import client from './src/common/db.js'
import peliculaRoutes from './src/pelicula/routes.js'
import actorRoutes from './src/actor/routes.js'

const PORTS = 3000 || 3001
const app = express()

app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {return res.status(200).send('Bienvenido al cine Iplacex') })

app.use('/api/peliculas', peliculaRoutes);
app.use('/api/actores', actorRoutes);

await client.connect()
.then(() => {
    console.log('Conectado al clúster')
    app.listen(PORTS, () => { console.log(`Servidor corriendo en http://localhost:${PORTS}`) })
})

.catch(() => {
    console.log('Ha ocurrido un error al conectar al clúster de Atlas')
})
