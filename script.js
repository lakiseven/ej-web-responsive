
var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = './medico1.jpg';

imgArray[1] = new Image();
imgArray[1].src = './medico2.jpg';

imgArray[2] = new Image();
imgArray[2].src = './medico3.jpg';




function nextImage(){       

    var img = document.getElementById("mainImage");
    
    for(var i = 0; i < imgArray.length;i++){
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){
                document.getElementById("mainImage").src = imgArray[0].src;
                
                break;
            }
            document.getElementById("mainImage").src = imgArray[i+1].src;
            
            break;
        }
    }
}
function previousImage(){
    var img = document.getElementById("mainImage");
    for(var i = imgArray.length-1; i >=0 ;i--){
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){
                document.getElementById("mainImage").src = imgArray[4].src;
                
                break;
            }
            document.getElementById("mainImage").src = imgArray[i-1].src;
            break;
        }
    }
}

function ocultar(){
    
    document.getElementById("mainImage").style.display="none";
 
}

function mostrar(){
    
    document.getElementById("mainImage").style.display="";
 
}






 /*
 Este codigo no anda y era para cambiar el estilo de un boton con un click
 document.querySelector("button.button-menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive");
 
 });
 
 */ 