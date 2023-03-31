const topNavButtons = document.querySelectorAll(".top_nav_buttons");

topNavButtons.forEach(topNavButton => {
    topNavButton.addEventListener("focus",()=>{
        topNavButton.innerHTML = ``
   })
   topNavButton.addEventListener("blur",()=>{
    topNavButton.innerHTML = topNavButton.value
})
});