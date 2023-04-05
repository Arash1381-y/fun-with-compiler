const path = require('path');

const validateExtension = (req, res, next) => {
    const file = req.files.file;
    const ext = path.extname(file.name);
    if (ext !== '.zip') {
        return res.status(400).json({ status: "error", message: "Invalid file extension" })
    }
    next();
}

const saveFiles = (filesPath) => {
    const save = (req, res, next) => {
        const file = req.files.file;
        const filepath = path.join(filesPath, req.id, file.name)
        req.filePath = filepath;
        console.log(filepath);
        file.mv(filepath, (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ status: "error", message: err })
            }
        });
        next();
    }
    return save;
}


module.exports = { validateExtension, saveFiles }