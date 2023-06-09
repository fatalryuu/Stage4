const Router = require("express");
const router = new Router();
const db = require("../database/db");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
    try {
        const { username, password, firstName, lastName, age } = req.body;
        const passwordHash = await bcrypt.hash(password, 5);
        const newUser = await db.query(
            `INSERT INTO person
                 (username, password_hash, first_name, last_name, age)
             values ($1, $2, $3, $4, $5) RETURNING *`,
            [username, passwordHash, firstName, lastName, age],
        );
        res.json(newUser.rows[0]);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Server error" });
    }
});

router.post("/login", (req, res) => {
    const betaId = 1;
    const betaUsername = "admin";
    const betaPassword = "1234";
    try {
        const { username, password } = req.body;
        const isCorrectPassword = bcrypt.compareSync(betaPassword, password);

        if (username === betaUsername && password === betaPassword) {
            return res.json({
                id: betaId,
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
