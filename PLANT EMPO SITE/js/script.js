

function showMenu(){
    const menuTray = document.querySelector('.mobileMenu');
    const openMenubtn = document.querySelector('.openMobile');
    const closeMenubtn = document.querySelector('.closeMobile');

    menuTray.style.display = "block"
    openMenubtn.style.display = "none"
    closeMenubtn.style.display = "block"
    
}


function hideMenu(){
    const menuTray = document.querySelector('.mobileMenu');
    const openMenubtn = document.querySelector('.openMobile');
    const closeMenubtn = document.querySelector('.closeMobile');

    menuTray.style.display = "none"
    openMenubtn.style.display = "block"
    closeMenubtn.style.display = "none"
    
}