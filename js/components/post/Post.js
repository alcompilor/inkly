import * as UserAPI from "../../api/users.js";

const fetchUsername = async (userID) => {
    const user = await UserAPI.getUser(userID);
    return await user.username;
};

const buildComponent = async (post) => {
    const postContainer = document.createElement("div");
    postContainer.className = "post-container";
    postContainer.dataset.id = post.id;

    const postWrapper = document.createElement("div");
    postWrapper.className = "post-wrapper";

    const fetchedUsername = await fetchUsername(post.userId);
    const username = document.createElement("span");
    username.className = "username";
    username.textContent = `@${fetchedUsername}`;
    username.dataset.id = post.userId;

    const title = document.createElement("span");
    title.className = "post-title";
    title.textContent = post.title;

    const body = document.createElement("p");
    body.className = "post-content";
    body.textContent = post.body;

    const hypeSection = document.createElement("div");
    hypeSection.className = "hype-wrapper";

    const hypeIcon = document.createElement("img");
    hypeIcon.className = "hype-icon";
    [hypeIcon.src, hypeIcon.alt] = [
        "./assets/icons/hype.svg",
        "Illustration of fire icon",
    ];
    [hypeIcon.width, hypeIcon.height] = [30, 30];

    const hypeCount = document.createElement("span");
    hypeCount.className = "hype-count";
    hypeCount.textContent = post.reactions;

    hypeSection.append(hypeIcon, hypeCount);
    postWrapper.append(username, title, body, hypeSection);

    postContainer.appendChild(postWrapper);
    return postContainer;
};

export { buildComponent };
