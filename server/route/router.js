// Main Routers
var express = require('express')
var router = express.Router()

// Sub Routers
var _login = require('./login')

router.post('/auth', _login.login)

module.exports = router
