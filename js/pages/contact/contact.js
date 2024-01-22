import * as Navbar from "../../components/navbar/Navbar.js";
import * as ContactForm from "../../components/contact/ContactForm.js";

const render = () => {
    document.body.prepend(Navbar.buildComponent());

    const root = document.querySelector(".root");
    root.appendChild(ContactForm.buildComponent());
}

render();