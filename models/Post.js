import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    authorname: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
