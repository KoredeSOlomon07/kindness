const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();

dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;

// conenction to mongodb
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// routes
app.use(require('./routes/index'));
app.use(require('./routes/todo'));

// server configurations....
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
