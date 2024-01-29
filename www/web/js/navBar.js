import * as ProjectLoader from './projectLoader.js'
const navBar = document.getElementById("navBar")
const navBarIcon = document.getElementById("navIcon")
const navCont = document.getElementById("navCont")

let navOpen = false


navBar.addEventListener('click', function(){
    if(navOpen == false){
        navOpen = true
      
        navBar.style.width = '70%';
        navBarIcon.style.color = '#ffffff00';
        navCont.style.display = "block";
    } else {
        navOpen = false
    
        navBar.style.width = '5%';
        navBarIcon.style.color = '#fff';
        navCont.style.display = "none";

    }
    

}) 




function osExit(){
    console.log("AOJ")
    document.getElementById('os-window').style.display = "none"
}

function openFolderNav(id){
    var folders_class = document.getElementsByClassName('navigation_link')

    for (var i = 0; i < folders_class.length; i++) {
        folders_class[i].addEventListener('click', function () {
            // Odebrání třídy 'navigation_link_selected' ze všech prvků s třídou 'navigation_link'
            for (var j = 0; j < folders_class.length; j++) {
                folders_class[j].classList.remove('navigation_link_selected');
            }
    
            // Přidání třídy 'navigation_link_selected' pouze kliknutému elementu
            this.classList.add('navigation_link_selected');
        });
    }
}

var home = document.getElementById('open_home')

home.addEventListener('click', function(){
   
})