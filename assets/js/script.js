$(document).ready(function(){
    // au clic sur un lien
    $('a').on('click', function(evt){
       // bloquer le comportement par défaut: on ne rechargera pas la page
       evt.preventDefault(); 
       // enregistre la valeur de l'attribut  href dans la variable target
 var target = $(this).attr('href');
       /* le sélecteur $(html, body) permet de corriger un bug sur chrome 
       et safari (webkit) */
 $('html, body')
       // on arrête toutes les animations en cours 
       .stop()
       /* on fait maintenant l'animation vers le haut (scrollTop) vers 
        notre ancre target */
       .animate({scrollTop: $(target).offset().top}, 1000 );
    });
});



var canvasCorps = document.getElementById('corps');
var ctxCorps = canvasCorps.getContext('2d');
var imgCorps = new Image();
imgCorps.src = "images/corps.png";

var canvasBonnet = document.getElementById('bonnet');
var ctxBonnet = canvasBonnet.getContext('2d');
var imgBonnet = new Image();
imgBonnet.src = "images/bonnet.png";



function drawCorps(){
  ctxCorps.drawImage(imgCorps,0,0, canvasCorps.width, canvasCorps.height);
}

function drawbonnet(){
  ctxBonnet.drawImage(imgBonnet,0,0, canvasBonnet.width, canvasBonnet.height);
}

imgCorps.onload = drawCorps;
imgBonnet.onload = drawbonnet;

function changeBonnet1(id) { 

  if (id == 'btn1')
    imgBonnet.src = "images/bonnet.png";
  if (id == 'btn2')
    imgBonnet.src = "images/bonnet2.png";
  if (id == 'btn3')
    imgBonnet.src = "images/bonnet3.png";
}

