import express from 'express';
import coreMiddleware from './middleware/core';
import api from './api';

const app = express();
coreMiddleware(app);

app.use('/api', api);
app.get('/', helloWorldHandler);

function helloWorldHandler(req, res) {
  res.json({ working: true });
}

export default app;
