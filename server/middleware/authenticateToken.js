const config = require("config");
const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token === "undefined") {
        return res.status(401).json({ message: "Invalid token" });
    }

    jwt.verify(token, config.get("accessKey"), err => {
        if (err) {
            return res.status(403).json({ message: "Access token expired" });
        }
        next();
    });
};

module.exports = authenticateToken;
