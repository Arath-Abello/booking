

const meses = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const calendarioDiv = document.getElementById("calendario");
const mesDiv = document.getElementById("mes");
const diasDiv = document.querySelector(".dias");

const horaInput = document.getElementById("horaInput");
const horamain = document.getElementById("maintime");

let done = document.getElementById('done');
let formDate = document.getElementById('formDate');

let fechaSeleccionada;
let horaSeleccionada;

const fechaActual = new Date();
let mesActual = fechaActual.getMonth();
let añoActual = fechaActual.getFullYear();

const mostrarCalendario = (mes, año) => {
  const primerDia = new Date(año, mes, 1);
  const ultimoDia = new Date(año, mes + 1, 0);

  mesDiv.textContent = `${meses[mes]} ${año}`;

  diasDiv.innerHTML = "";

  for (let i = 0; i < primerDia.getDay(); i++) {
    const diaAnterior = document.createElement("div");
    diaAnterior.classList.add("otro-mes");
    diaAnterior.textContent = ultimoDia.getDate() - (primerDia.getDay() - i - 1);
    diasDiv.appendChild(diaAnterior);
  }

  for (let j = 1; j <= ultimoDia.getDate(); j++) {
    const dia = document.createElement("div");
    dia.textContent = j;
    dia.addEventListener("click", () => {
      fechaSeleccionada = new Date(año, mes, j);
      const diaSeleccionado = fechaSeleccionada.getDate();
      const mesSeleccionado = meses[fechaSeleccionada.getMonth()];
      const añoSeleccionado = fechaSeleccionada.getFullYear();
      const fechaFormateada = `${diaSeleccionado} de ${mesSeleccionado} de ${añoSeleccionado}`;
      document.getElementById("date").textContent = `${fechaFormateada}`;
      // calendarioDiv.style.display = "none";
    });
    diasDiv.appendChild(dia);
  }
};

mostrarCalendario(mesActual, añoActual);

document.getElementById("anterior").addEventListener("click", () => {
  mesActual--;
  if (mesActual < 0) {
    mesActual = 11;
    añoActual--;
  }
  mostrarCalendario(mesActual, añoActual);
});

document.getElementById("siguiente").addEventListener("click", () => {
  mesActual++;
  if (mesActual > 11) {
    mesActual = 0;
    añoActual++;
  }
  mostrarCalendario(mesActual, añoActual);
});


const dateDiv = document.getElementById("date");

dateDiv.addEventListener("click", () => {
  if (calendarioDiv.style.display === "block") {
    calendarioDiv.style.display = "none";
  } else {
    calendarioDiv.style.display = "block";
  }
});

formDate.addEventListener('submit', (e)=>{
  e.preventDefault();
});

// la hora abajo del calendario
horaInput.addEventListener("input", () => {
  horamain.value = horaInput.value;
});

done.addEventListener('click', () => {
  
  calendarioDiv.style.display = 'none';
});


