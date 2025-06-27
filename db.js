const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/test1'; // Replace with your MongoDB URI

mongoose.connect(dbURI, 
    { useNewUrlParser: true, 
      useUnifiedTopology: true 
    })
  .then(() => console.log('MongoDB connected successfully'))  
  
  const db = mongoose.connection;
db.on('connected', () => console.log('connected'));
db.on('disconnected', () => console.log('disconnected'));
db.on('error', (err) => console.error('MongoDB connection error:', err));

// Export the connection for use in other modules
module.exports = db;