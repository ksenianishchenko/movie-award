const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    console.log(req);
    console.log(res);
   console.log(path.join(publicPath, 'index.html'));
   res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('/dist/bundle.js',(req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'bundle.js'));
});

app.listen(port, () => {
   console.log(`Server is up on port ${port}!`);
});
