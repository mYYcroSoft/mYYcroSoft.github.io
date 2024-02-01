
import { menuContent } from "../config/menu.js";
import { pageList } from "../config/page.js";


function loadmenuContent(){

    var menuContentContainer = document.getElementById('navigation_link_list')

    for (let cont in menuContent) {
        var menuContentData = menuContent[cont];
        
        var navigationLink = document.createElement('div')
        navigationLink.className = 'navigation_link'
        navigationLink.id = 'navigation_menuContent'
        navigationLink.setAttribute('id-menuContent', cont)
        navigationLink.innerHTML = menuContentData.icon
        navigationLink.addEventListener('click', function(){ openPage(this) })
        menuContentContainer.appendChild(navigationLink)

    }
}

loadmenuContent()

function openPage(elementId){
    var id = elementId.getAttribute('id-menuContent')
    var menuContentData = menuContent[id];

    
    if (menuContentData.page in pageList){
        console.log(menuContentData.page);
        openFolderNav(id)
        var pageData = pageList[menuContentData.page]

    } else {
        console.log('💥PAGE SYSTEM | Stránka (' + menuContentData.page + ') nebyla nalezena v configu')   
    }
}

    


function openFolderNav(id){
    console.log("START "+ id);
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

