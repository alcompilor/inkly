const getPosts = async (limit, skipID = 0) => {
    try {
        const res = await fetch(
            `https://dummyjson.com/posts?limit=${limit}&skip=${skipID}`
        );
        const data = await res.json();

        return data.posts;
    } catch (err) {
        throw new Error("Failed to fetch posts");
    }
};

export { getPosts };