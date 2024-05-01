let griglia = document.getElementById(`grid`);

for (let i = 0; i < 100; i++) {
    
    let square = document.createElement("div");
    square.classList.add("square");
    square.innerText = i;
    griglia.append(square);
    
}