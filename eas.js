
const createGrid = (numSquares) => {
    const container = document.getElementById("container");

    container.innerHTML = "";


    for (let i = 0; i < numSquares; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
    }

};



createGrid(256);