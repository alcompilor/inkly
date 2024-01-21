const calcAge = (birthDate) => {
    const differenceMs = Date.now() - new Date(birthDate).getTime();
    const ageDate = new Date(differenceMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const buildComponent = (user) => {
    const profileContainer = document.createElement("div");
    profileContainer.className = "profile-container";

    const profileWrapper = document.createElement("div");
    profileWrapper.className = "profile-wrapper";

    const closeButton = document.createElement("img");
    closeButton.className = "profile-close";
    [closeButton.src, closeButton.alt] = [
        "./assets/icons/close.svg",
        "Button to close profile",
    ];
    [closeButton.width, closeButton.height] = [30, 30];
    closeButton.addEventListener("click", () => {
        profileContainer.remove();
        document.body.classList.remove("blur");
    });

    const pDetailsContainer = document.createElement("div");
    pDetailsContainer.className = "p-details-container";

    const avatarEl = document.createElement("img");
    avatarEl.className = "p-details-avatar";
    [avatarEl.src, avatarEl.alt] = [user.image, `Avatar for ${user.username}`];
    [avatarEl.width, avatarEl.height] = [100, 100];

    const pDetailsWrapper = document.createElement("div");
    pDetailsWrapper.className = "p-details-wrapper";

    const fullNameEl = document.createElement("h2");
    fullNameEl.className = "p-details-fullName";
    fullNameEl.textContent = `${user.firstName} ${user.lastName}`;

    const usernameEl = document.createElement("span");
    usernameEl.className = "p-details-username";
    usernameEl.textContent = `@${user.username}`;

    pDetailsWrapper.append(fullNameEl, usernameEl);
    pDetailsContainer.append(avatarEl, pDetailsWrapper);

    const aboutContainer = document.createElement("div");
    aboutContainer.className = "about-container";

    const aboutTitle = document.createElement("h2");
    aboutTitle.className = "about-title";
    aboutTitle.textContent = `About ${user.firstName}`;

    const aboutWrapper = document.createElement("div");
    aboutWrapper.className = "about-wrapper";

    const birthDateEl = document.createElement("span");
    birthDateEl.className = "about-birthdate";
    birthDateEl.textContent = `Birth Date:\n${
        user.birthDate
    } — (${calcAge(user.birthDate)} years old)`;

    const genderEl = document.createElement("span");
    genderEl.className = "about-gender";
    const genderCaptilized = user.gender.charAt(0).toUpperCase() + user.gender.slice(1);
    genderEl.textContent = `Gender:\n${genderCaptilized}`;

    const contactEmailEl = document.createElement("span");
    contactEmailEl.className = "about-cemail";
    contactEmailEl.textContent = `Contact Email:\n${user.email}`;

    const websiteEl = document.createElement("span");
    websiteEl.className = "about-website";
    websiteEl.textContent = `Website:\n${user.domain}`;

    aboutWrapper.append(birthDateEl, genderEl, contactEmailEl, websiteEl);
    aboutContainer.append(aboutTitle, aboutWrapper);

    const moreContainer = document.createElement("div");
    moreContainer.className = "more-container";

    const moreTitle = document.createElement("h2");
    moreTitle.className = "more-title";
    moreTitle.textContent = `More about ${user.firstName}`;

    const moreWrapper = document.createElement("div");
    moreWrapper.className = "more-wrapper";

    const locationEl = document.createElement("span");
    locationEl.className = "more-location";
    locationEl.textContent = `Currently lives in:\n${user.address.city}, ${user.address.state}`;

    const eduEl = document.createElement("span");
    eduEl.className = "more-education";
    eduEl.textContent = `Education:\n${user.university}`;

    const careerEl = document.createElement("span");
    careerEl.className = "more-career";
    careerEl.textContent = `Career:\n${user.company.title} @ ${user.company.name}`;

    moreWrapper.append(eduEl, locationEl, careerEl);
    moreContainer.append(moreTitle, moreWrapper);

    profileWrapper.append(
        closeButton,
        pDetailsContainer,
        aboutContainer,
        moreContainer
    );
    profileContainer.appendChild(profileWrapper);

    return profileContainer;
};

export { buildComponent };
