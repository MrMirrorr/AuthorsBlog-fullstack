import Comment from "../models/Comment.js";
import Post from "../models/Post.js";

// add
export const createComment = async (postId, comment) => {
	const newComment = await Comment.create(comment);

	await Post.findByIdAndUpdate(postId, { $push: { comments: newComment } });

	await newComment.populate("author");

	return newComment;
};

// delete
export const deleteComment = async (postId, commentId) => {
	await Comment.deleteOne({ _id: commentId });
	await Post.findByIdAndUpdate(postId, { $pull: { comments: commentId } });
};
