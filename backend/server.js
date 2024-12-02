const dotenv = require('dotenv');
dotenv.config();

const http = require('http');
const app = require('./app');

const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 4000;

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});