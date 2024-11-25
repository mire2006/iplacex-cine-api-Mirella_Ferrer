import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = 'mongodb+srv://ev3_express:ZG9Mt8hOkEC6jYON@cluster-express.xo3gg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-express'

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

export default client 
