import mongoose from 'mongoose';

const { Schema } = mongoose;

const Model = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: false,
      },
    ],
  },

  { timestamps: {} },
);

export default mongoose.model('Book', Model);
