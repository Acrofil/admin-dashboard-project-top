
const collapseMenu = document.querySelector(".collapse");
let menuBtn = document.querySelector(".open-icon");

let isOpen = false;

menuBtn.addEventListener("click", () => {

    if (!isOpen) {

        collapseMenu.style.display = "flex";
        
        menuBtn.classList.remove('mdi-menu-open');
        menuBtn.classList.add('mdi-menu-close');
        
        isOpen = true;
     
       
    } else if (isOpen) {

        collapseMenu.style.display = 'none';
      
        menuBtn.classList.remove('mdi-menu-close');
        menuBtn.classList.add('mdi-menu-open');

        isOpen = false;
    };

    menuBtn.forEach((btnClick) => btnClick.classList.toggle("active"));


});



