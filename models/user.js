const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
<<<<<<< HEAD
  
=======
  isLaunderer: { type: Boolean, default: false },
  fee: { type: Number, default: null }
>>>>>>> b11952c28e8ad56cc6499def92c4954aab1e2e61
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

<<<<<<< HEAD
module.exports = User;
=======
module.exports = User;
>>>>>>> b11952c28e8ad56cc6499def92c4954aab1e2e61
