import { Schema, model } from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  type_id: {
    type: Schema.Types.ObjectId,
    ref: "Type",
    required: true
  }
});
const User = model("User", userSchema);
export default User;
