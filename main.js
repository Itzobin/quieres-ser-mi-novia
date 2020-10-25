const btnno = document.getElementById('btnno');
const btnyes = document.getElementById('btnyes');

btnno.addEventListener('mouseenter', () => {
    console.log("mouse entrando");
    const pos = coordenadas();
    btnno.style.top = `${pos.posy}px`;
    btnno.style.left = `${pos.posx}px`;
})

const coordenadas = () => {
    const ancho = screen.width - 100;
    const alto = screen.height - 200;
    const posx = Math.random() * (ancho - 0) + 0;
    const posy = Math.random() * (alto - 0) + 0;
    return { posx, posy }
}

btnyes.addEventListener('click', () => {
    alert('Ya sabía que querías ser mi novia :)');
});