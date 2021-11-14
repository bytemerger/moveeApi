const express = require('express');
const apiRoutes = require('../app/routes/index');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json());
app.use('/api/v1', apiRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ message:'Api is Alive and Working' });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})