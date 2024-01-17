import * as Landing from "../components/landing/Landing.js";

const render = () => {
    const root = document.querySelector(".root");
    const landingComponent = Landing.buildComponent();

    root.appendChild(landingComponent);
}

render();