"use strict";
const body = document.querySelector("body")
  , buttonModal = document.querySelectorAll("#js-modal")
  , buttonCloseModal = document.querySelectorAll("#js-close-modal");
buttonModal.forEach(e => {
    const t = e.attributes.getNamedItem("data-modal").value;
    e.addEventListener("click", () => {
        const e = document.querySelector(`.c-modal#${t}`);
        e.classList.add("active"),
        body.style.overflow = "hidden"
    }
    )
}
),
buttonCloseModal.forEach(e => {
    e.addEventListener("click", () => {
        const e = document.querySelectorAll(".c-modal");
        e.forEach(e => {
            e.classList.remove("active"),
            body.style.overflow = "auto",
            body.style.overflowX = "hidden"
        }
        )
    }
    )
}
),
addEventListener("DOMContentLoaded", () => {
    const e = new URLSearchParams(window.location.search);
    if ("true" === e.get("modalThanks")) {
        const t = document.querySelector(".c-modal#thanks");
        t.classList.add("active"),
        body.style.overflow = "hidden"
    }
}
);
const input = document.querySelector("#phone");
window.intlTelInput(input, {
    initialCountry: "BR",
    showSelectedDialCode: !0,
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@20.0.5/build/js/utils.js"
}),
input.addEventListener("input", e => {
    var t = e.target.value;
    /^[0-9\s-]*$/.test(t) || (e.target.value = t.slice(0, -1))
}
);
