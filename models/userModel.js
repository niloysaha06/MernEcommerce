import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, //remove whitespace
    },
    email: {
      type: String,
      required: true,
      unique: true, //unique email
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0, //0=false,1=true
    },
  },
  { timestamps: true } //when new user create,added created time
);

export default mongoose.model("users", userSchema);
