const semaforo = document.getElementById('semaforo');

const buttons = document.getElementById('botoes');

const coresIndex = 0;

const trafficLight = (event) => {
    turnOn[event.target.id](); //os parenteses após os colchetes é para executar.
}


const turnOn = {
    'red': () => semaforo.src = 'img/vermelho.png',
    'green': () => semaforo.src = 'img/verde.png',
    'yellow': () => semaforo.src = 'img/amarelo.png'
}



buttons.addEventListener('click', trafficLight);