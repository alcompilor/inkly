const initClickable = (btn, checkbox) => {
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    });
};

const initValidation = (btn, nameInput, emailInput, form, formNote) => {
    btn.addEventListener("click", () => {
        const nameRegex = /^[A-Za-z\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        formNote.style.display = "block";

        if (
            nameRegex.test(nameInput.value) &&
            emailRegex.test(emailInput.value) &&
            form.checkValidity()
        ) {
            formNote.style.background = "#597f67";
            formNote.textContent = "Thank you! We'll get back to you soon.";
            setTimeout(() => form.submit(), 2500);
        } else {
            formNote.style.background = "#7f5959";
            formNote.textContent = "Please fill in all fields correctly.";
        }
    });
};

const buildComponent = () => {
    const formContainer = document.createElement("section");
    formContainer.className = "cform-container";

    const formTitle = document.createElement("h1");
    formTitle.className = "cform-title";
    formTitle.textContent = "Any issues? Contact Us";

    const formNote = document.createElement("span");
    formNote.className = "cform-feedback";
    formNote.style.display = "none";

    const form = document.createElement("form");
    form.id = "cform";
    form.action = "./feed.html";

    const fieldSet = document.createElement("fieldset");

    const fullName = document.createElement("input");
    fullName.className = "cform-input-name";
    fullName.type = "text";
    fullName.placeholder = "Full name";
    fullName.required = true;

    const email = document.createElement("input");
    email.className = "cform-input-email";
    email.type = "email";
    email.placeholder = "Email";
    email.required = true;

    const desc = document.createElement("textarea");
    desc.className = "cform-input-desc";
    desc.placeholder = "Please type your message here.";
    desc.rows = 8;
    desc.cols = 30;
    desc.required = true;

    const checkboxLabel = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.class = "cform-input-terms";

    checkboxLabel.appendChild(checkbox);
    checkboxLabel.appendChild(
        document.createTextNode(" I accept the terms and conditions")
    );

    const submitBtn = document.createElement("button");
    submitBtn.className = "cform-submit-btn";
    submitBtn.textContent = "Send";
    submitBtn.disabled = true;
    
    fieldSet.append(fullName, email, desc, checkboxLabel);
    form.append(fieldSet);
    formContainer.append(formTitle, formNote, form, submitBtn);

    initClickable(submitBtn, checkbox);
    initValidation(submitBtn, fullName, email, form, formNote);

    return formContainer;
};

export { buildComponent };
