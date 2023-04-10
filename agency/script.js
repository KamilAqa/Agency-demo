window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0)
});

const navItem = document.querySelectorAll("#agency ul li a");
navItem.forEach(item => {
    item.addEventListener("click", (e) => {

        e.preventDefault();
    })
})

const active = document.querySelector(".active");

let agencyBtn = document.getElementById("agency");

agencyBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

new bootstrap.ScrollSpy(document.body, {
    target: "#navbarNav"
});

const iEl = document.querySelectorAll(".fa-plus");

const btnModal = document.querySelector(".class-modal");

const overlay = document.querySelector(".overlay");
const BtnClose = document.querySelector(".btn--close-modal")

const spanEl = document.querySelector(".cls");

// spanEl.addEventListener("click", (e) => {
//     e.preventDefault();
// });

const openModal = () => {
    btnModal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}


const closeModal = () => {
    btnModal.classList.add("hidden")
    overlay.classList.add("hidden")
}

BtnClose.addEventListener("click", function (e) {
    e.preventDefault();
    closeModal();
})

// const chngImg = document.getElementById("imgBtn");
// const imaged = document.querySelector(".class-img img");
// chngImg.addEventListener("click", (e) => {
//     e.preventDefault();
//     imaged.src = "./image/dreams.jpg"
// })


const boxEl = document.querySelectorAll("#section2 .box");
const imaged = document.querySelector(".class-modal img");

iEl.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        const imgd = document.querySelector(`.${e.target.classList[1]}`);
        console.log(imgd.previousElementSibling.src);

        imaged.src = imgd.previousElementSibling.src;
        openModal();
    })
});


// iEl.addEventListener("click", (e) => {
//     e.preventDefault();
//     imaged.src[0] = "./image/dreams.jpg"
// })