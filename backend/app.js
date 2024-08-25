const express = require('express');
const dotenv = require('dotenv')
const userRoutes = require('./routes/userRoute');

const app = express();
const port = 3000;
dotenv.config();

app.use(express.json());
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});