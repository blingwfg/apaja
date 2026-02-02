import express from 'express'
import ip from 'ip'

const app = express()

app.get('/info', (req, res) => {
    res.status(200).json(
        {
            ip: ip.address()
        }
    )
})

app.listen(3000, () => console.log('app run on port 3000'))