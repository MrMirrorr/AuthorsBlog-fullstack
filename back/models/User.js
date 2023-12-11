import mongoose from "mongoose";
import { ROLE } from "../constants/roles.js";

const UserSchema = mongoose.Schema(
	{
		login: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: Number,
			default: ROLE.USER,
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
