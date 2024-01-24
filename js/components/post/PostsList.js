import * as Post from "./Post.js";
import * as CommentAPI from "../../api/comments.js";
import * as CommentsList from "../../components/comment/CommentsList.js";

const fetchPostComments = async (postID) => {
    const comments = await CommentAPI.getComments(postID);
    return comments.length > 0
        ? CommentsList.buildComponent(comments)
        : new DocumentFragment();
};

const buildComponent = async (posts, masonry = false) => {
    const postsContainer = document.createElement("section");
    postsContainer.className = "posts-container";

    for (const post of posts) {
        const postEl = await Post.buildComponent(post);
        postEl.appendChild(await fetchPostComments(post.id));
        postsContainer.appendChild(postEl);
        masonry && masonry.appended(postEl);
    }

    return postsContainer;
};

export { buildComponent };
