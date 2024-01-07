const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => timeSince(date),
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema],
  },
  {
    virtuals: {
      reactionCount: {
        get() {return length(this.reactions)},
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

const Thought = model('thought', thoughtsSchema);

module.exports = Thought;
