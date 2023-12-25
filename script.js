const loader = () => {
    window.addEventListener("load", () => {
        let preloader = document.querySelector(".preloader");
        preloader.classList.add("disapear");
    }) 
}
loader();

/* jQ
const loader = () => {
    $(window).on("load", () => {
        $(".preloader").addclass("disapear");
    }) 
}
loader();