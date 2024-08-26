const express = require('express');
const dotenv = require('dotenv')
const cors = require("cors");
const userRoutes = require('./routes/userRoute');




const app = express();
app.use(cors());
const port = 3000;
dotenv.config();

app.use(express.json());
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});