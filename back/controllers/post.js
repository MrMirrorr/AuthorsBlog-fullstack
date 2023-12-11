import Post from "../models/Post.js";

// add
export const createPost = async (post) => {
	const newPost = await Post.create(post);

	await newPost.populate({
		path: "comments",
		populate: "author",
	});

	return newPost;
};

// edit
export const updatePost = async (id, post) => {
	const newPost = await Post.findByIdAndUpdate(id, post, {
		returnDocument: "after",
	});

	await newPost.populate({ path: "comments", populate: "author" });

	return newPost;
};

// delete
export const deletePost = (id) => {
	return Post.deleteOne({ _id: id });
};

// get list search and pagination
export const getPosts = async (search = "", limit = 10, page = 1) => {
	const [posts, count] = await Promise.all([
		Post.find({ title: { $regex: search, $options: "i" } })
			.limit(limit)
			.skip((page - 1) * limit)
			.sort({ createdAt: -1 }),
		Post.countDocuments({ title: { $regex: search, $options: "i" } }),
	]);

	return {
		posts,
		lastPage: Math.ceil(count / limit),
	};
};

// get item
export const getPost = (id) => {
	return Post.findById(id).populate({
		path: "comments",
		populate: "author",
	});
};
