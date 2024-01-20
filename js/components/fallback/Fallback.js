const buildComponent = (node) => {
    const fallbackImg = document.createElement("img");
    fallbackImg.className = "fallback-img";
    [fallbackImg.src, fallbackImg.alt] = ["./assets/img/fallback.svg", "Fallback animation"];
    [fallbackImg.width, fallbackImg.height] = [400, 400];

    node.appendChild(fallbackImg);

    return function removeComponent () {
        node.removeChild(fallbackImg);
    }
}

export { buildComponent };