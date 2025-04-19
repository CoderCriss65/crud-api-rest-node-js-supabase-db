const express = require('express');
const cors = require('cors');
require('dotenv').config();

const clientRoutes = require('./routes/clientRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/clientes', clientRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API Clientes escuchando en puerto ${PORT}`);
});