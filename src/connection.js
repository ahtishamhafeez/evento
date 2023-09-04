const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017/Evento';
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log(':OK');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });