
function grid(containerId, numberOfBoxes, containerSize = 600, gap = 0) {
    const container = document.getElementById(containerId);

    container.innerHTML = "";

    container.style.position = "relative";
    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;

    const rows = Math.round(Math.sqrt(numberOfBoxes));
    const cols = rows;
    const boxSize = (containerSize - gap * (cols)) / cols;
    
    for (let i = 0; i < numberOfBoxes; i++) {
        const box = document.createElement("div");
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;

        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "#ffb6c1";
        });
    container.appendChild(box);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const containerId = "container";
    const containerSize = 600;
    const initialBoxes = 256;
    const gap = 0;

    grid(containerId, initialBoxes, containerSize, gap);

    const numberBtn = document.querySelector("#numberBtn");

    numberBtn.addEventListener("click", () => {
        const input = prompt("Number of squares per side: ");
        const gridSize = parseInt(input);
        if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
            alert("invalid entry");
            return;
        }
        grid(containerId, gridSize * gridSize, containerSize, gap)
    });
});

