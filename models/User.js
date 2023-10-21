import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["seller", "buyer"],
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
