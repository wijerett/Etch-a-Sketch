const container = document.getElementById("container");





function createGrid (numSquares) {
    container.innerHTML = "";
    for (let i = 0; i < numSquares; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
    
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "black";
        });
    }
};

const numberBtn = document.querySelector("#numberBtn");
numberBtn.addEventListener("click", () => {
    const input = prompt("Number of squares per side: ");
    for (let i = 0; i < input; i++);

    if (input >= 100 || input <= 0 || input === null) {
        alert("invalid entry");
        return;
    } 

    createGrid(input*input);
});

createGrid(256);

