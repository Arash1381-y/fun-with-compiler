const decompress = require('decompress');
const path = require('path');
async function unzip(srcPath, resultPath) {
    return await decompress(srcPath, resultPath);
};


const programSaver = (req, res) => {
    unzip(req.filePath, path.parse(req.filePath).dir).then(result => {
        res.status(200).json({ token: req.token });
    }).catch(err => {
        res.status(500).json({ message: "Internal Server Error" });
    });
};

module.exports = { programSaver };