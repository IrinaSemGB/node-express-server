import mongoose from 'mongoose';

const { Schema } = mongoose;

const Model = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },

  { timestamps: {} },
);

Model.index({ email: 1 }, { unique: true });

export default mongoose.model('Client', Model);
