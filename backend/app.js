const express = require('express');
const dotenv = require('dotenv')
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require('./routes/userRoute');



const app = express();
app.use(
  cors({
    origin: `http://localhost:5173`,
    credentials: true
  })
);
const port = 3000;
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});