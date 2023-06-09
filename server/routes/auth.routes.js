const Router = require("express");
const router = new Router();
const db = require("../database/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");

const createAccessToken = user => {
    return jwt.sign(user, config.get("accessKey"), { expiresIn: "5s" });
};

const createRefreshToken = user => {
    return jwt.sign(user, config.get("refreshKey"), { expiresIn: "7d" });
};

router.post("/token", (req, res) => {
    const { refreshToken, t } = req.body;
    jwt.verify(refreshToken, config.get("refreshKey"), (err, user) => {
        if (err) {
            console.log(err);
            return res.status(403).json({ message: "Invalid refresh token" });
        }
        const accessToken = createAccessToken({ username: user.username });
        res.json({ accessToken });
    });
});

router.post("/register", async (req, res) => {
    try {
        const { username, password, firstName, lastName, age } = req.body;
        const passwordHash = await bcrypt.hash(password, 5);
        const userQuery = await db.query(
            `INSERT INTO person
                 (username, password_hash, first_name, last_name, age)
             values ($1, $2, $3, $4, $5) RETURNING *`,
            [username, passwordHash, firstName, lastName, age],
        );
        const newUser = userQuery.rows[0];
        const [accessToken, refreshToken] = [
            createAccessToken(newUser),
            createRefreshToken(newUser),
        ];
        return res.json({
            id: newUser.id,
            accessToken,
            refreshToken,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Server error" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        const selectResult = await db.query(
            "SELECT * FROM person WHERE username = $1",
            [username],
        );
        const user = selectResult.rows[0];

        if (!user) {
            return res
                .status(400)
                .json({ message: "Invalid username or password" });
        }

        const isCorrectPassword = bcrypt.compareSync(
            password,
            user.password_hash,
        );

        if (isCorrectPassword) {
            const [accessToken, refreshToken] = [
                createAccessToken(user),
                createRefreshToken(user),
            ];

            return res.json({
                id: user.id,
                accessToken,
                refreshToken,
            });
        } else {
            return res
                .status(400)
                .json({ message: "Invalid username or password" });
        }
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
