const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const apiRoutes = require('../app/routes/index');
const errorHandler = require('../config/error');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json());
app.use('/api/v1', apiRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ message:'Api is Alive and Working' });
})

app.use(errorHandler);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
})