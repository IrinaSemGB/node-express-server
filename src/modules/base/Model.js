import mongoose from 'mongoose';

const { Schema } = mongoose;

const Model = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },

  { timestamps: {} },
);

export default mongoose.model('Base', Model);
