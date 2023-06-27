const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')

const app = express()

app.use(express.json())
app.use(cors({ origin: true }))
app.use(routes)



app.listen(3002, () => {
    console.log("Servidor Rodando")
})