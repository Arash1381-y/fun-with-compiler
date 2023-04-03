const express = require('express')
const route = express.Router()
const { programSaver } = require('../controllers/programController')
const { generateToken } = require('../middlewares/tokenMiddleware')
const { createPathString } = require('../middlewares/filesMiddleware')
route.post('/program', generateToken, createPathString, programSaver)