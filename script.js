let griglia = document.getElementById(`grid`);

for (let i = 0; i <= 100; i++) {
    let elemento = creaQuadrato();

    griglia.append(elemento);


    
}

function creaQuadrato(contenuto) {
    // Creo un quadrato
    let square = document.createElement("div");
    square.classList.add("square");
    square.innerText = contenuto;
   

    // Aggiungo un event listener 

    square.addEventListener("click", function(){
        console.log("cliccato");
    })

    return square;
}