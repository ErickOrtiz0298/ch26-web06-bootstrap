function changeGretting(){
    // obtener nombre cliente
    const clientName = getNameOfClient();

    // obtener referencia de label h1
    const grettingReference = getReferenceOfIdGretting();
    //console.log(grettingReference.innerHTML);

    //TODO cambiar el saludo
    grettingReference.innerHTML = "Hola " + clientName + ", te lo dije no?";

}

function getNameOfClient(){
    const clientName = prompt("Escribe tu nombre");
    return clientName;
}

function getReferenceOfIdGretting(){
    return document.getElementById("gretting"); //objeto
}
