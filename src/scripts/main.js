const logoEl = document.querySelector(".logo");

function doLogo(name) {
    return name + " Gallery";
}

logoEl.textContent = doLogo("Gulp");