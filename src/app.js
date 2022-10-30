// Variables
let uploaded_image;

//display the image inside the base picture and save the location where it was place
$(document).ready(function() {
    $('img').click(function(e) {
        const offset = $(this).offset();
        let X = (e.pageX - offset.left);
        let Y = (e.pageY - offset.top);
        
        
        // $('#coord').text('X: ' + X + ', Y: ' + Y);
             
        // const img = new Image(randomNumber(10,100), randomNumber(10,100));
        const img = new Image(10,20);
        
        img.src =uploaded_image;
        //img.src ="car_2.png";
        img.style.position ="absolute"
        img.style.left = e.pageX ;
        img.style.top = e.pageY ;
        document.body.appendChild(img);
        
        
    });
});
// const image_input = document.querySelector("#image-input");
const image_input =  document.getElementById("img1");
const imgBox = document.getElementById("imgBox");
const image_input2 = document.getElementById("img2");
const imgBox2 = document.getElementById("imgBox2")

image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    imgBox.style.backgroundImage = `url(${uploaded_image})`;

    // document.querySelector("img").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
  
  
});

image_input2.addEventListener("change",function(){
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    imgBox2.style.backgroundImage = `url(${uploaded_image})`
  });
  reader.readAsDataURL(this.files[0]);
});

function randomNumber(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}