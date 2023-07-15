$(document).ready(function(){  
 calculardensidad();



 $(".calcular4").click(function(event){
    event.preventDefault();
    calculardensidad();
});


});


function redondear(cantidad, decimales) 
{
    var cantidad = parseFloat(cantidad);
    var decimales = parseFloat(decimales);
    decimales = (!decimales ? 2 : decimales);
    return Math.round(cantidad * Math.pow(10, decimales)) / Math.pow(10, decimales);
}


function calculardensidad(){
    var Hab = document.getElementById("densidad_a").value;
     var Sup = document.getElementById("densidad_b").value;
     
     document.getElementById("densidad_r1").value = redondear(Hab / Sup);

  }
  function calcularpintura(){
    var a = document.getElementById("pintura_a").value;
    var b = document.getElementById("pintura_b").value;
    $("#pintura001").text(redondear(a*b*0.1706256,4));
    $("#pintura002").text(redondear(a*b*0.613836,4));
    $("#pintura003").text(redondear(a*b*0.1019592,4));
    $("#pintura004").text(redondear(a*b*0.1706256,4));
    $("#pintura005").text(redondear(a*b*0.801108,4));
    $("#pintura006").text(redondear(a*b*0.447372,4));
    $("#pintura007").text(redondear(a*b*0.020808,4));
    $("#pintura008").text(redondear(a*b*0.0228888,4));
}
function calcularvia(){
    var long = document.getElementById("transactionAmount_a").value;
     
     document.getElementById("total_r1").value = long;

  }

