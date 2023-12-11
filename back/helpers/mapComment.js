export default (comment) => {
	return {
		id: comment._id,
		content: comment.content,
		author: comment.author.login,
		publishedAt: comment.createdAt,
	};
};
