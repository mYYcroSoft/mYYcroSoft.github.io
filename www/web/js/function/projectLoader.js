import { project_list } from "../config/projectList.js";
export function loadProjects() {
    var projectContainer = document.getElementById("projList");

    for (let proj in project_list) {
        var projectData = project_list[proj];
        console.log(projectData)
        $('#projList').append(
            `
        <div class="projectBox" data-id=${proj} id="proj" onclick="openProjectInfo(this)">
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