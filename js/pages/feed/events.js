import * as PostAPI from "../../api/posts.js";
import * as PostsList from "../../components/post/PostsList.js";
import * as Fallback from "../../components/fallback/Fallback.js";

const mount = (masonry = false) => {
    const infiniteScroll = () => {
        let isLoading = false;

        async function loadData() {
            isLoading = true;
            const removeFb = Fallback.buildComponent(document.querySelector(".root"));
            
            const postsContainer = document.querySelector(".posts-container");
            const lastID = document.querySelector(".post-container:last-child")
                .dataset.id;
            
            const newPosts = await PostAPI.getPosts(2, parseInt(lastID));

            const postsList = (await PostsList.buildComponent(newPosts, masonry))
                .childNodes;
            
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
            })
        })
    }

    infiniteScroll();
    expandComments();
};

export { mount };
