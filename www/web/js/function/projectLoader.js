import { project_list } from "../config/projectList.js";

export function loadProjects() {
    var projectContainer = document.getElementById("projList");

    for (let proj in project_list) {
        var projectData = project_list[proj];
        console.log(projectData)
        $('#projList').append(
            `
        <div class="projectBox" data-id=${proj} id="proj" onclick="">
        <div class="projectImg">
        <div class="projctShadow">
            <h3 class="projecTitle">
                ${projectData.name}
            </h3>
            <div class="projectParalax" alt="${projectData.par}">
                 <span>${projectData.par}</span>
            </div>
            <div class="projectTags" alt="Project">
                <span class="projectTag">    ${projectData.tags}</span>
            </div>
      
        </div>
            `
         
        )
        

    }
}



$('#projList').on("click", '.projectBox', function() {
    // Get the data-id attribute value
    var elementId = $(this)
    console.log(elementId);
});



function loadProjectsWithTag(id){
    var buttonTag = id.innerText;

    projList.innerHTML = ''
    if (buttonTag == 'All'){

        loadProjects()
    }  
    for (let proj in project_list) {
        var projectData = project_list[proj];
        if (projectData.tags == buttonTag){
        console.log(projectData)
        $(projList).append(
            `
        <div class="projectBox" data-id=${proj} id="proj" onclick="openProjectInfo(this)">
        <div class="projectImg">
        <div class="projctShadow">
            <h3 class="projecTitle">
                ${projectData.name}
            </h3>
            <span class="projectParalax" alt="${projectData.par}">
                 ${projectData.par}
            </span>
            <div class="projectTags" alt="Project">
                <span class="projectTag">    ${projectData.tags}</span>
            </div>
      
        </div>
            `
        )
    
    }    

    }

}


var projectBoxStatus = false
var projectLastId = 0
var projBox = document.getElementById('projectInfoBox')
function openProjectInfo(elementId){
 
/*if(projectBoxStatus == false){
    projBox.style.right = '0%'
    projectBoxStatus = true
 } else {
    projBox.style.right = '-100%'
    projectBoxStatus = false
 }*/
 
 console.log( elementId.target);
var infotitle = document.getElementById('infoBoxTitle')
var infotext = document.getElementById('InfoBoxText')
    const dataObjectId = getAttribute("data-id")
    const dataObjectData  = project_list[dataObjectId]
    infotitle.innerText = dataObjectData.name
    infotext.innerText = dataObjectData.text
     

    
}