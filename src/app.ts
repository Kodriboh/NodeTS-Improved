'use strict';

import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Node!')
});

/** Middleware **/

export default app;