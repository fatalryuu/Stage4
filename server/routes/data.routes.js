const Router = require("express");
const router = new Router();

router.get("/projects", (req, res) => {
    try {
        res.json(require("../data/projects"));
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Can not get projects" });
    }
});

module.exports = router;
