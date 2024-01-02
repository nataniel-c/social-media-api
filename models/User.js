const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Thought');

// Schema to create Student model
const studentSchema = new Schema(
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
    thoughts: [thoughtsSchema],
    assignments: [assignmentSchema],
    friends: [friendsArray]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Student = model('student', studentSchema);

module.exports = Student;
