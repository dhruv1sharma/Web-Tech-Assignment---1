ScrollReveal().reveal(".appliances-row");

const mobileNav = document.querySelector(".mobile-navigation ul");
document.querySelector('.mobile-navigation i').addEventListener('click',()=>{
    console.log("clicked");
    mobileNav.classList.contains('show') ? mobileNav.classList.remove('show'):mobileNav.classList.add("show")
    console.log(mobileNav)
})

scrollReveal().reveal(".appliances-row");
