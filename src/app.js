import express from 'express';
import coreMiddleware from './middleware/core';

const app = express();
coreMiddleware(app);

app.get('/', helloWorldHandler);

function helloWorldHandler(req, res) {
  res.json({ working: true });
}

export default app;
