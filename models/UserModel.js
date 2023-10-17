import mongoose from "mongoose";
const signupSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone_no: {
    type: String,
    required: true,
  },
  address: {
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
  },
});
const UserModel = mongoose.models.user || mongoose.model("user", signupSchema);
export default UserModel;
