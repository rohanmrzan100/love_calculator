// header color change

var header=document.querySelector('.header')
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(){

    inputColor=getRandomColor();
    header.style.color=inputColor;
}
setInterval("changeColor()",500);




// logic
 var num=Math.floor(Math.random()*100);// logic to produce random number form 0 to 100

function change(){

    header.textContent="Love Calculator results ";
    document.querySelector('#resulttext').textContent="The result by Dr Love is:"
    document.querySelector('.nameMale').textContent=document.querySelector('#name1').value;
    document.querySelector('.nameFemale').textContent=document.querySelector('#name2').value;
    document.querySelector('.num').textContent=num+"%";
    var con =document.querySelectorAll('.container');
     con[0].style.display = 'none';   
     con[1].style.display = 'none';   
     con[2].style.display = 'none';   
     document.querySelector('p').textContent="To calculate again refresh the page";


}

document.querySelector('.btn').addEventListener('click',change);