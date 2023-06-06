const express = require('express');
const cors = require("cors");
const authRouter = require('./routes/auth.routes');
const dataRouter = require('./routes/auth.routes');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/data', dataRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});