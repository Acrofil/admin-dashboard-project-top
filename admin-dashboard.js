
const collapseMenu = document.querySelector(".collapse");
let menuBtn = document.querySelector(".open-icon");

let isOpen = false;

menuBtn.addEventListener("click", () => {

    if (!isOpen) {
        
        menuBtn.classList.remove('mdi-menu-open');
        menuBtn.classList.add('mdi-menu-close');
        collapseMenu.classList.add("active");
        
        isOpen = true;
     
       
    } else if (isOpen) {
      
        menuBtn.classList.remove('mdi-menu-close');
        menuBtn.classList.add('mdi-menu-open');
        collapseMenu.classList.remove("active");

        isOpen = false;
    };



});



