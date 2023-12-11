import User from "../models/User.js";
import { verifyToken } from "../helpers/token.js";

export default async (req, res, next) => {
	const tokenData = verifyToken(req.cookies.token);

	const user = await User.findOne({ _id: tokenData.id });

	if (!user) {
		res.send({ error: "Authenticated user not found" });

		return;
	}

	req.user = user;

	next();
};
