const title1 = document.getElementById('title1');

function changeColor() {
    const colors = ["red", "green", "blue", "orange", "purple"];
    let index = 0;

    setInterval(() => {
        title1.style.color = colors[index];
        index = (index + 1) % colors.length;
    }, 1000); // Cambia de color cada 1 segundo
}

changeColor();