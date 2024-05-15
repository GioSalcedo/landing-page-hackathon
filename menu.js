const toggleButton = document.getElementById("button__menu");

const nav = document.getElementById("navegacion")

toggleButton.addEventListener('click',() => {
    toggleButton.classList.toggle("close")
    nav.classList.toggle("show")
   
})

navButton.addEventListener('click', e =>{
    if(e.target.id = "navegacion"){
        nav.classList.remove("show")
        toggleButton.classList.remove("close")
        console.log("tambien unciona")
    }
})