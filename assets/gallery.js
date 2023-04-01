function show_album(arch, img){
   console.log(arch)
   console.log(img)

   const images_array = img
   var arrayLength = images_array.length;
   document.getElementById("img_ct").style.display = 'block';
   document.getElementById("img_ct").style.animation = "anim 2s 2s forward";

   for (var i = 0; i < arrayLength; i++) {
    console.log(images_array[i]);
    var df_img = images_array[i];
    var df = '../images/' + arch + '/' + df_img
    document.getElementById('img_ct').insertAdjacentHTML('beforeend', '<img class="catalog_img"  src="' + df +'"> <br>');
    console.log(images_array[i]);
    
}

   
const videoUrl = 'https://imgur.com/YeiPQ8b.mp4';




document.getElementById('img_ct').insertAdjacentHTML('beforeend', 
'<video class="catalog_img" controls name="" src="https://link.storjshare.io/s/jvmpmdrspbs2j4y3jr25llwlno7a/demo-bucket/fc_deadscreen-demo%282%29.mp4?wrap=0 "></video> <br>');

}

function remov(){

const parentElement = document.querySelector('.images_catalog');
document.getElementById("img_ct").style.display = 'none';


const childElementsToRemove = parentElement.querySelectorAll('*');
childElementsToRemove.forEach((element) => {
    if (element.id !== 'rm_button') {
        element.remove();
      }
});
    console.log('remove')
}


