/*Función: Es un bloque de codigo independiente
que se lo puede usar en cualquier parte de mi programa
para que sirve: facilitar el código
reutilizar el código
sintaxis básica: funtion nombre_funtion(){
bloque de código
}*/

/*function saludo(nombre){
    document.write("Hola "  + nombre)
}
//llamamos a la función
saludo("Eduardo" + "<br>")

function suma(numero1, numero2){
    //inicializamos las variables a utilizar
    var numero1=numero1
    var numero2=numero2
    //document.write(numero1+numero2)
    var resultado=numero1+numero2
   //document.write(resultado)
  //return resultado
  return numero1+numero2
}
document.write(suma(10, 30))*/

var maximo= function maximo(valor1, valor2){
    if (valor1>valor2){
        return valor1
    }else{
        return valor2
    }
}

maximo (50,25)
document.write( "<br>"+ "el número mayor es " + maximo(25,2))

var suma= function(numero1, numero2){
    var numero1=parseInt(document.getElementById("numero1").value);
    var numero2=parseInt(document.getElementById("numero2").value);
    var resultado= numero1+numero2
    return resultado
}
//document.write(suma(10,2))