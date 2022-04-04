document.getElementById("play").addEventListener("click", function(){
   let livello = play();
   const griglia = document.getElementById("griglia");
    let testo = 1;
    for (let numrow=1; numrow<=livello; numrow++){
    const contenuto = document.createElement("div");
    contenuto.setAttribute("class", "row");
    griglia.append(contenuto);
    for (let numero = 1; numero<=livello; numero++) {
        const colonna = document.createElement("div");
        colonna.setAttribute("class", "col-1");
        contenuto.append(colonna);
        colonna.append(testo);
        testo++;
    }
}

})

function play(){
console.log("play");
let valore = document.getElementById("livelli").value;
return valore;
}









