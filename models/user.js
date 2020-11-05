const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  address: String,
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: "Photo",
    }
  ],
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;
