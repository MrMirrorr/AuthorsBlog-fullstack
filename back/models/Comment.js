import mongoose from "mongoose";

const CommentSchema = mongoose.Schema(
	{
		content: {
			type: String,
			required: true,
		},
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
