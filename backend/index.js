const express = require('express');
    const app = express();
    const port = 3001; // Choose a port for your backend

    app.use(express.json()); // Middleware to parse JSON bodies

    app.get('/', (req, res) => {
      res.send('Hello from Express.js backend!');
    });

    app.listen(port, () => {
      console.log(`Backend server listening at http://localhost:${port}`);
    });
