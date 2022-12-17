const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;
    
    horas.textContent = hr;
    minutos.textContent = min;

})
let Date1 = document.querySelector("data");

let data = new Date();

const objData = {
    month: "short",
    weekday: "short",
    day: "numeric",
}

//console.log(data.toLocaleTimeString("pt-BR", objData));

Date1.textContent = data.toLocaleTimeString("pt-BR", objData);
