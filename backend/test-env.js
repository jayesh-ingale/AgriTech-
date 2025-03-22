require('dotenv').config({ path: 'E:/AgriTech-/backend/.env' });

console.log('PORT:', process.env.PORT);
console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('JWT_SECRET:', process.env.JWT_SECRET);