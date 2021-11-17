const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const CronJob = require('cron').CronJob;
const apiRoutes = require('../app/routes/index');
const errorHandler = require('../config/error');
const fetchJob = require('../cron/index');
const { fetchLoop } = require('../app/helpers');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json());
app.use('/api/v1', apiRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ message:'Api is Alive and Working' });
})

app.use(errorHandler);

const job = new CronJob('* * * * *', function() {
    console.log('You will see this message every min');
    fetchJob();
  }, null, true, 'America/Los_Angeles',null, true);

job.start();

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
})