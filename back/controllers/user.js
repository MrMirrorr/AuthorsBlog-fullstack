import bcrypt from "bcrypt";
import User from "../models/User.js";
import { generateToken } from "../helpers/token.js";
import { ROLE } from "../constants/roles.js";

// register

export const register = async (login, password) => {
	if (!password) {
		throw new Error("Password is empty");
	}

	const passwordHash = await bcrypt.hash(password, 10);

	const user = await User.create({ login, password: passwordHash });
	const token = generateToken({ id: user.id });

	return { user, token };
};

// login

export const login = async (login, password) => {
	const user = await User.findOne({ login });

	if (!user) {
		throw new Error("User not found");
	}

	const isPasswordMatch = await bcrypt.compare(password, user.password);

	if (!isPasswordMatch) {
		throw new Error("Wrong password");
	}

	const token = generateToken({ id: user.id });

	return { user, token };
};

export const getUsers = () => {
	return User.find();
};

export const getRoles = () => {
	return [
		{ id: ROLE.ADMIN, name: "Admin" },
		{ id: ROLE.MODERATOR, name: "Moderator" },
		{ id: ROLE.USER, name: "User" },
	];
};

// delete

export const deleteUser = async (id) => {
	return User.deleteOne({ _id: id });
};

// edit (roles)

export const updateUser = async (id, userData) => {
	return User.findByIdAndUpdate(id, userData, { returnDocument: "after" });
};
