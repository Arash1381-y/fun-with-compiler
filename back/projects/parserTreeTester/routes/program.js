const express = require('express')
const fileUpload = require("express-fileupload");
const path = require("path");

const router = express.Router()
const { programSaver } = require('../controllers/programController')
const { generateToken } = require('../middlewares/tokenMiddleware')
const { validateExtension, saveFiles } = require('../middlewares/filesMiddleware')

router.get('/program', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

router.post('/program',
    fileUpload({
        createParentPath: true,
        limits: { fileSize: 50 * 1024 * 1024 },
        useTempFiles: true,
        tempFileDir: process.env.TEMP_FILES_PATH
    }),
    validateExtension,
    generateToken,
    saveFiles(process.env.FILES_PATH),
    programSaver
)

module.exports = router