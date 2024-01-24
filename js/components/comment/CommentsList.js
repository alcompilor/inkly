import * as Comment from "./Comment.js";

const buildComponent = (comments) => {
    const commentsContainer = document.createElement("section");
    if (comments.length > 1) {
        commentsContainer.classList.add("comments-container", "hidden-overflow");
    } else {
        commentsContainer.className = "comments-container";
    }

    const commentsWrapper = document.createElement("div");
    commentsWrapper.className = "comments-wrapper";

    comments.forEach((comment) => {
        const commentEl = Comment.buildComponent(comment);
        commentsWrapper.appendChild(commentEl);
    });

    commentsContainer.appendChild(commentsWrapper);

    if (comments.length > 1) {
        const expandBtn = document.createElement("button");
        expandBtn.className = "comments-expand-btn";

        const expandBtnIcon = document.createElement("img");
        [expandBtnIcon.alt, expandBtnIcon.src] = [
            "Expand comments button icon",
            "./assets/icons/arrowdown.svg",
        ];
        [expandBtnIcon.width, expandBtnIcon.height] = [40, 40];

        expandBtn.appendChild(expandBtnIcon);
        commentsContainer.appendChild(expandBtn);
    }

    return commentsContainer;
};

export { buildComponent };
