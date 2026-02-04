// Simple seed to create an example user
const mongoose = require('mongoose');
const User = require('./src/models/User');
const bcrypt = require('bcrypt');
const { mongoUri } = require('./src/config');

async function run(){
  await mongoose.connect(mongoUri);
  const pw = await bcrypt.hash('password123', 10);
  const u = new User({ name: 'Demo User', email: 'demo@example.com', password: pw });
  await u.save();
  console.log('Created demo user demo@example.com / password123');
  process.exit(0);
}

run().catch(err=>{ console.error(err); process.exit(1) })
