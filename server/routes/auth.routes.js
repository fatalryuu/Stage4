const Router = require("express");
const router = new Router();

router.post('/login', (req, res) => {
    const betaId = 1;
    const betaUsername = "admin";
    const betaPassword = "1234";
    try {
        const {username, password} = req.body;

        if (username === betaUsername && password === betaPassword) {
            return res.json({
                id: betaId
            })
        } else {
            return res.status(400).json({message: "Invalid username or password"});
        }
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;