const jwt = require('jsonwebtoken');

let id = 0;
const generateToken = (req, res, next) => {
    const token = jwt.sign(
        { id: id },
        process.env.TOKEN_KEY,
        {
            expiresIn: "2h",
        }
    );
    req.token = token;
    req.id = id;
    id++;

    next();
}

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
            if (err) {
                res.status(401).json({ message: "Invalid Token" });
            } else {
                req.id = decoded;
                next();
            }
        });
    } else {
        res.status(401).json({ message: "No Token Provided" });
    }
}

module.exports = { generateToken, verifyToken };