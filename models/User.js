import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
  name: {
    /* The name of this pet */

    type: String,
    required: [true, 'Please provide a name for this pet.'],
    maxlength: [20, 'Name cannot be more than 20 characters'],
  },
  age: {
    /* User's age, if applicable */

    type: Number,
  },
});

const model = mongoose.models.User || mongoose.model('User', UserSchema);

export default model;
