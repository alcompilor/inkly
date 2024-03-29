const buildComponent = () => {
    // Containers
    const landingCont = document.createElement("section");
    landingCont.className = "landing-container";

    const landingLeftCont = document.createElement("section");
    landingLeftCont.className = "landing-left";

    const landingRightCont = document.createElement("section");
    landingRightCont.className = "landing-right";

    // Left container elements
    const leftImg = document.createElement("img");
    leftImg.className = "landing-logo";
    [leftImg.src, leftImg.alt] = [
        "./assets/img/logo.svg",
        "Image showing logo of the Socialize website",
    ];
    [leftImg.width, leftImg.height] = [200, 80];

    const leftTitle = document.createElement("h1");
    leftTitle.className = "landing-slogan";
    leftTitle.textContent =
        "Browse, Connect, Explore — No Sign-ups, Just Stories!";

    landingLeftCont.append(leftImg, leftTitle);

    // Right container elements
    const rightText = document.createElement("p");
    rightText.className = "landing-info";
    rightText.textContent =
        "Explore posts freely, no registrations needed — just pure, effortless interaction.";

    const rightAnchor = document.createElement("a")
    rightAnchor.href = "./feed.html";
    rightAnchor.className = "landing-btn";
    rightAnchor.role = "button";
    rightAnchor.textContent = "Discover Posts";

    landingRightCont.append(rightText, rightAnchor);

    // Append all containers to main container
    landingCont.append(landingLeftCont, landingRightCont);
    return landingCont;
};

export {buildComponent};