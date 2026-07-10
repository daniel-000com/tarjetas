function crearTarjetas(){
    let desde = recuperarFloat("textDesde");
    let hasta = recuperarFloat("textHasta");
    let salto = recuperarFloat("textSalto");
    let contenido="";
    let divTarjetas;
    divTarjetas=document.getElementById("divTarjetas")
    for(let i =desde; i<=hasta; i +=salto){
        contenido = contenido + "<div class='item'>"+ i +"</div>"
        divTarjetas.innerHTML = contenido;
    }
     
//reutilizar codigo ¶:v //
}
function recuperarTexto(idComponente){
    let componente=document.getElementById(idComponente);
    let valor =componente.value;
    return valor; 
}
function recuperarFloat(idComponente){
   let valorTexto=recuperarTexto(idComponente);
   let valorFloat=parseFloat(valorTexto)
   return valorFloat;
}
