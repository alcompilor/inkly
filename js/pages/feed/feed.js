import * as PostAPI from "../../api/posts.js";
import * as PostsList from "../../components/post/PostsList.js";
import * as Navbar from "../../components/navbar/Navbar.js";
import * as FeedEvents from "./events.js";
import * as Fallback from "../../components/fallback/Fallback.js";

const buildPage = async () => {
    const initPosts = await PostAPI.getPosts(4);
    const postsContainer = PostsList.buildComponent(initPosts);

    return postsContainer;
};

const render = async () => {
    document.body.prepend(Navbar.buildComponent());

    const root = document.querySelector(".root");
    const removeFb = Fallback.buildComponent(root);

    root.appendChild(await buildPage());

    const profileContainer = document.createElement("div");
    profileContainer.classList.add("profile-container", "hidden");
    document.body.appendChild(profileContainer);

    removeFb();
};

render().finally(() => {
    if (!
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        const masonry = new Masonry(document.querySelector(".posts-container"), {
            itemSelector: ".post-container",
            columnWidth: ".post-container",
            transitionDuration: 0,
        });

        FeedEvents.mount(masonry);
    } else {
        FeedEvents.mount();
    }
});
