import * as PostAPI from "../../api/posts.js";
import * as UserAPI from "../../api/users.js";
import * as PostsList from "../../components/post/PostsList.js";
import * as Fallback from "../../components/fallback/Fallback.js";
import * as Profile from "../../components/profile/Profile.js";

const mount = (masonry = false) => {
    const infiniteScroll = () => {
        let isLoading = false;

        async function loadData() {
            isLoading = true;
            const removeFb = Fallback.buildComponent(
                document.querySelector(".root")
            );

            const postsContainer = document.querySelector(".posts-container");
            const lastID = document.querySelector(".post-container:last-child")
                .dataset.id;

            const newPosts = await PostAPI.getPosts(2, parseInt(lastID));

            const postsList = (
                await PostsList.buildComponent(newPosts, masonry)
            ).childNodes;

            postsContainer.append(...postsList);
            masonry && masonry.layout();

            removeFb();
            isLoading = false;
        }

        window.addEventListener("scroll", async () => {
            if (
                window.innerHeight + window.scrollY >=
                    document.body.offsetHeight - 200 &&
                !isLoading
            ) {
                await loadData();
                expandComments();
                showProfiles();
                incrementHypes();
            }
        });
    };

    const expandComments = () => {
        const expandBtn = document.querySelectorAll(".comments-expand-btn");

        expandBtn.forEach((btn) => {
            btn.addEventListener("click", () => {
                const parentEl = btn.parentElement;
                parentEl.classList.remove("hidden-overflow");
                btn.style.display = "none";
                masonry && masonry.layout();
            });
        });
    };

    const showProfiles = () => {
        const usernameBtns = document.querySelectorAll(".username");
        usernameBtns.forEach((btn) => {
            // Clone button to remove previous event listeners
            const newBtn = btn.cloneNode(true);
            btn.replaceWith(newBtn);

            newBtn.addEventListener("click", async () => {
                const userID = btn.dataset.id;
                const fetchedUser = await UserAPI.getUser(userID);

                const profile = Profile.buildComponent(fetchedUser);
                document.body.append(profile);
                document.body.classList.add("blur");
            });
        });
    };

    const incrementHypes = () => {
        const hypeBtns = document.querySelectorAll(".hype-wrapper");
        hypeBtns.forEach((btn) => {
            // Clone button to remove previous event listeners
            const newBtn = btn.cloneNode(true);
            btn.replaceWith(newBtn);

            newBtn.addEventListener("click", () => {
                newBtn.lastChild.textContent++;
            });
        });
    };

    infiniteScroll();
    expandComments();
    showProfiles();
    incrementHypes();
};

export { mount };
