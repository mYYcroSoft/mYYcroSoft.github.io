import { menuContent } from "../config/menu.js";
import { pageList } from "../config/page.js";
import * as projectLoader from "./projectLoader.js";

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

var OPEN_PAGE_ID = 1;
var DEFAULT_PAGE_IG = 1;
function openPage(elementId){
    var pageContainer = document.getElementById('page')    
    var id = elementId.getAttribute('id-menuContent')
    var menuContentData = menuContent[id];
  
    if (id != OPEN_PAGE_ID){
        if (OPEN_PAGE_ID != id){

                if (menuContentData.page in pageList){  
                    console.log(menuContentData.page);
                    openFolderNav(elementId)
                    var pageListData = pageList[menuContentData.page]
                     console.log(pageListData);
                    if (pageListData.onPageRedir == true) {

                        pageContainer.style.display = 'block';
                      
                        $('#page').load(pageListData.index);
                        if (pageListData.index == 'projectlist.html'){
                            setTimeout(() => {
                                projectLoader.loadProjects()
                                pageContainer.animate([
                                    { opacity: 0 },
                                    { opacity: 1 },
                                  ],
                                  { duration: 300 }); 
                                  setTimeout(() => {
                                    pageContainer.style.opacity = 1;
                                  }, 300);
                              }, 100);
                        }
                    }  else {
                        console.log('[0101] 💥PAGE SYSTEM | Stránka (' + menuContentData.page + ') je nastavena na redirect na jinou stránku, který aktuálně není funkční.')
                    }
                } else {
                    console.log('[0102] 💥PAGE SYSTEM | Stránka (' + menuContentData.page + ') nebyla nalezena v configu')   
                }

        } else {
            // Pokud se otevře stejná stránka (OPEN_PAGE_ID == ID)
            

        }
    } else {
        pageContainer.animate([
            { opacity: 1 },
            { opacity: 0 },
          ],
          { duration: 300 }); 
          setTimeout(() => {
            pageContainer.innerHTML = '';
            pageContainer.style.display = 'none';
            pageContainer.style.opacity = 0;
          }, 300);

        
    }
}

    


function openFolderNav(elementId){
    console.log("START "+ elementId);
    var folders_class = document.getElementsByClassName('navigation_link')
    elementId.classList .add('navigation_link_selected');
    for (var i = 0; i < folders_class.length; i++) {
        folders_class[i].addEventListener('click', function () {
            // Odebrání třídy 'navigation_link_selected' ze všech prvků s třídou 'navigation_link'
            for (var j = 0; j < folders_class.length; j++) {
                folders_class[j].classList.remove('navigation_link_selected');
            }
    
            // Přidání třídy 'navigation_link_selected' pouze kliknutému elementu
           
        });
    }
}


// JS - Load html file into div (jQuery)
//$('#blogCatalog').load("projectlist.html")