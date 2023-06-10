const Router = require("express");
const router = new Router();
const db = require("../database/db");

router.get("/projects", async (req, res) => {
    try {
        const selectResult = await db.query(
            `SELECT *
             FROM project`,
        );
        res.json(selectResult.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Can not get projects" });
    }
});

module.exports = router;
