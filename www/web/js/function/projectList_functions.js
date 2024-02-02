var projectBoxStatus = false
var projectLastId = 0
var projBox = document.getElementById('projectInfoBox')
function openProjectInfo(id){
if(projectBoxStatus == false){
    projBox.style.right = '0%'
    projectBoxStatus = true
 } else {
    projBox.style.right = '-100%'
    projectBoxStatus = false
 }

var infotitle = document.getElementById('infoBoxTitle')
var infotext = document.getElementById('InfoBoxText')
    const dataObjectId = id.getAttribute("data-id")
    const dataObjectData  = project_list[dataObjectId]

    infotitle.innerText = dataObjectData.name
    infotext.innerText = dataObjectData.text
     

    
}