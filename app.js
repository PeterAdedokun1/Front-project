const linkContainer = document.querySelector(".link-container");
const btn = document.querySelector(".bx-menu");
const navCenter = document.querySelector(".nav-center")
const company = document.querySelectorAll(".company");
const bx = document.querySelectorAll(".link-container .bx");
const landingUl = document.querySelector(".landing-ul");
// const landing = document.querySelector(".landing")
// console.log(landingUl)
// console.log(landing)
const landingBtn = document.querySelector(".bx-chevron-down");
console.log(landingBtn)
landingBtn.addEventListener("click", () => {
    console.log("heyyyyy")
    landingUl.classList.toggle("show-landing");
})
// console.log(bx);
// console.log(company)
const dropDown = document.querySelectorAll(".drop-down");

company.forEach((nav) => {
    const btn = nav.querySelector(".link-container .bx");
    // console.log(btn)
    btn.addEventListener("click", () => {
        company.forEach((item) => {
            if (item !== nav) {
            item.classList.remove("show-text")     
            }
        })
            nav.classList.toggle("show-text")
    })
    
})



// *********** for the nav button ****************
btn.addEventListener("click", () => {
    linkContainer.classList.toggle("show-links")
})

// scrolling effect*********************************
const navbar = document.getElementById("nav")
console.log(nav)
window.addEventListener("scroll", ()=> {
    const scrollHeight = window.pageYOffset;
    console.log(scrollHeight)
    const navHeight = navbar.getBoundingClientRect().height;
const topLink = document.querySelector(".top-link");

    if (scrollHeight > "850") {
        navbar.classList.add("fixed-nav")
    }
    else if(scrollHeight < navHeight) {
        navbar.classList.remove("fixed-nav")
    }
    if (scrollHeight > 500) {
        topLink.classList.add("show-link")
    } else {
        topLink.classList.remove("show-link")
    }

})