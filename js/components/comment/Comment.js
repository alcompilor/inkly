const buildComponent = (comment) => {
    const commentEl = document.createElement("div");
    commentEl.className = "comment";

    const username = document.createElement("span");
    username.className = "username";
    username.textContent = `@${comment.user.username}`;
    username.dataset.id = comment.user.id;

    const body = document.createElement("p");
    body.className = "comment-content";
    body.textContent = comment.body;

    commentEl.append(username, body);
    return commentEl;
}

export { buildComponent };