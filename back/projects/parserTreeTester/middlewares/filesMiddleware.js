const decompress = require('decompress');
const path = require('path');

const createPathString = (req, res, next) => {
    req.resPath = path.join(process.env.FILES_PATH, req.id);
    next();
}

module.exports = { createPathString, }