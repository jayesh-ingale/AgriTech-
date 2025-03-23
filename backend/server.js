require('dotenv').config({ path: 'E:/AgriTech-/backend/.env' });
console.log('MONGODB_URI:', process.env.MONGODB_URI);

 // Add this line


const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors');

const app = express();

connectDB();

app.use(express.json());
app.use(cors());




app.use('/api/auth', authRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));