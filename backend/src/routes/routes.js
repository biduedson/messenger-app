const express = require('express')
const authenticate = require('../controllers/authenticate')

const routes = express()

routes.post("/authenticate", authenticate)

module.exports = routes