const getComments = async (postID) => {
    try {
        const res = await fetch(
            `https://dummyjson.com/comments/post/${postID}`
        );
        const data = await res.json();

        return data.comments;
    } catch (err) {
        throw new Error(`Failed to fetch comments for the post`);
    }
};

export { getComments };