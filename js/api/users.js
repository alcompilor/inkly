const getUser = async (userID) => {
    try {
        const res = await fetch(`https://dummyjson.com/users/${userID}`);
        const data = await res.json();

        return data;
    } catch (err) {
        throw new Error("Failed to fetch user");
    }
};

export { getUser };
