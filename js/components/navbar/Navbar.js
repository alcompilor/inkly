const buildComponent = () => {
    const navContainer = document.createElement("div");
    navContainer.className = "navbar";

    const logoAnchor = document.createElement("a");
    logoAnchor.href = "./";

    const logo = document.createElement("img");
    logo.src = "./assets/img/logo.svg";
    logo.alt = "Socialize Logo Image";
    logo.className = "logo";
    [logo.width, logo.height] = [300, 80];

    logoAnchor.appendChild(logo);

    const navbar = document.createElement("nav");
    const ul = document.createElement("ul");

    // Feed link
    const li1 = document.createElement("li");
    const a1 = document.createElement("a");

    a1.href = "./feed.html";
    a1.textContent = "Feed";

    li1.appendChild(a1);

    // Contact link
    const li2 = document.createElement("li");
    const a2 = document.createElement("a");

    a2.href = "./contact.html";
    a2.textContent = "Contact";

    li2.appendChild(a2);

    ul.append(li1, li2);
    navbar.append(ul);

    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        const detailsEl = document.createElement("details");
        const summaryEl = document.createElement("summary");

        summaryEl.prepend(logoAnchor);
        detailsEl.append(summaryEl, navbar);

        navContainer.append(detailsEl);
    } else {
        navContainer.append(logoAnchor, navbar);
    }

    return navContainer;
};

export { buildComponent };