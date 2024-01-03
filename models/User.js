const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
  },
  {
    virtuals: {
      friendCount: {
        get() {return length(this.friends)},
      }
    }
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
  }  
);

const User = model('user', userSchema);

module.exports = User;
