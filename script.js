const mobileToggle = document.querySelector(".mobile_toggle");
const mobileMenu = document.querySelector(".navbar_menu");

mobileToggle.addEventListener("click", ()=>{
    mobileMenu.classList.toggle("active");
    mobileToggle.classList.toggle("active");
})



// Navbar Observer

const nav = document.querySelector ("#navbar_container")
const header = document.querySelector ("#header_container")

function navCallback(entries){
    nav.classList.toggle ("active", !entries[0].isIntersecting)
}
const navOptions = {
    threshold: 0.5
}


const navObs = new IntersectionObserver (navCallback, navOptions)

navObs.observe(header)



// Fade Observer

const fadeUp = document.querySelectorAll (".fade-up");
const fadeLeft = document.querySelectorAll (".fade-left");
const fadeRight = document.querySelectorAll (".fade-right");
const fadeUpFast = document.querySelectorAll (".fade-up-fast");
const fadeUpSlow = document.querySelectorAll (".fade-up-slow");
const fadeLeftFast = document.querySelectorAll (".fade-left-fast");
const fadeLeftSlow = document.querySelectorAll (".fade-left-slow");
const fadeRightFast = document.querySelectorAll (".fade-right-fast");
const fadeRightSlow = document.querySelectorAll (".fade-right-slow");

const fadeUpObs = new IntersectionObserver ((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add("faded");
            fadeUpObs.unobserve(entry.target)
        }
    })
}, {
    threshold: 0.2
})

fadeUp.forEach(fadeUp =>{
    fadeUpObs.observe(fadeUp);
})

fadeUpFast.forEach(fadeUpFast =>{
    fadeUpObs.observe(fadeUpFast);
})

fadeUpSlow.forEach(fadeUpSlow =>{
    fadeUpObs.observe(fadeUpSlow);
})




const fadeLeftObs = new IntersectionObserver ((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add("faded");
            fadeLeftObs.unobserve(entry.target)
        }
    })
}, {
    threshold: 0.5
})

fadeLeft.forEach(fadeLeft =>{
    fadeLeftObs.observe(fadeLeft);
})

fadeLeftFast.forEach(fadeLeftFast =>{
    fadeLeftObs.observe(fadeLeftFast);
})

fadeLeftSlow.forEach(fadeLeftSlow =>{
    fadeLeftObs.observe(fadeLeftSlow);
})






const fadeRightObs = new IntersectionObserver ((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add("faded");
            fadeRightObs.unobserve(entry.target)
        }
    })
}, {
    threshold: 0.5
})

fadeRight.forEach(fadeRight =>{
    fadeRightObs.observe(fadeRight)
})

fadeRightFast.forEach(fadeRightFast =>{
    fadeRightObs.observe(fadeRightFast)
})

fadeRightSlow.forEach(fadeRightSlow =>{
    fadeRightObs.observe(fadeRightSlow)
})