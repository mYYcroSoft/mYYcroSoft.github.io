

var menuContent = {
    1:{ 
        name: 'Home',
        icon: '<i class="fa-solid fa-house navigation_link"></i>',
        alt: 'Domovní stránka',
        page: '',
    },
    2:{ 
        name: 'Projects',
        icon: '<i class="fa-solid fa-folder navigation_link"></i>',
        alt: 'Projekty',
        page: '',
    },
    3:{ 
        name: 'About',
        icon: '<i class="fa-solid fa-user navigation_link"></i>',
        alt: 'O mně',
        page: '',
    },

}



function loadmenuContent(){

    var menuContentContainer = document.getElementById('navigation_link_list')

    for (let cont in menuContent) {
        var menuContentData = menuContent[cont];
        console.log(cont);
        $(menuContentContainer).append(
            `
        <div class="navigation_link" id="navigation_menuContent" id-menuContent="${cont}">
            ${menuContentData.icon}
        </div>
            `)

            
   
    }
}
loadmenuContent()


var menuContentQuery = document.querySelectorAll('#navigation_menuContent')
for(var x in menuContentQuery){
    menuContentQuery[x].addEventListener('click', function(){
        var id = this.getAttribute('id-menuContent')
      //  openPage(menuContent[id].page)
        openFolderNav(id)
    })
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

