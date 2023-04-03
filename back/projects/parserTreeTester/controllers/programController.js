async function unzip(srcPath, resultPath) {
    return await decompress(srcPath, resultPath);
};


const programSaver = (req, res) => {
    unzip(req.filePath, req.filePath).then(result => {
        res.status(200).json({ token: req.token });
    }).catch(err => {
        res.status(500).json({ message: "Internal Server Error" });
    });
};

module.exports = { programSaver };