import { configDotenv } from 'dotenv'
import express from 'express'
import ip from 'ip'

configDotenv()

const app = express()
const info = {
    ["ip"]: ip.address(),
    ["startup_time"]: new Date().toLocaleTimeString('id-ID'),
    ["stage"]: process.env.STAGE,
    ["hostname"]: process.env.HOSTNAME
}


app.get('/', (req, res) => res.send(`Hello From Stage : ${process.env.STAGE}`))
app.get('/info', (req, res) => {
    res.status(200).json(info)
})

app.listen(3000, () => console.log('app run'))