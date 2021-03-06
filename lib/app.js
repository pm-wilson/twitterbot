const express = require('express');
const cors = require('cors');
const app = express();
const { mashupTweet } = require('./utils/utils');

app.use(cors());

app.use(express.json());

app.post('/mashup', async(req, res) => {
  try {
    const mashup = await mashupTweet(req.query.acc1, req.query.acc2);
    res.json(mashup);
  } 
  catch(e) {
    res.status(500).json({ error: e.message });
  }
});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
