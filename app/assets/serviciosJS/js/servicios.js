function selectService() {

    let seleccionado = document.getElementsByClassName('btnSeleccion');
    // si el valor de la variable i es menor a los elementos existentes, entonces que sume en 1 hasta llegar a dichos elementos
    for (i = 0; i < seleccionado.length; i++) {
        seleccionado[i].addEventListener('click', (e) => {
            let target = e.currentTarget;
            target.classList.add('btnSeleccionado');

            for (j = 0; j < seleccionado.length; j++) {
                if (seleccionado[j] !== target) {
                    seleccionado[j].classList.remove('btnSeleccionado');
                }
            }
        });
    }

}

selectService();

function popupService() {
    let popupService = document.getElementById('popupService');
    let popupPet = document.getElementById('popupPets');
    let cerrarPets = document.getElementById('cerrarPets');
    let cerrarService = document.getElementById('cerrarService');
    let detailService = document.getElementById('detailService');
    let detailPets = document.getElementById('detailPets');
    let html = document.getElementById('sombra');
    let sec1 = document.getElementById('sec1Popup');
    let sec2 = document.getElementById('sec2Popup');
    let sec4 = document.getElementById('sec4Popup');
    let popupLaggage = document.getElementById('popupLuggage');
    let btnPopupluggage = document.getElementById('luggage');
    let cerrarLuggage = document.getElementById('cerrarLuggage');

    detailService.addEventListener('click', ()=>{
        popupService.classList.add('mostrarService');
        html.classList.add('sombra');
        sec1.classList.add('sec1Popup');
        sec2.classList.add('sec2Popup');
        sec4.classList.add('sec4Popup');
        cerrarService.addEventListener('click', ()=>{
            popupService.classList.remove('mostrarService');
            html.classList.remove('sombra');
            sec1.classList.remove('sec1Popup');
        sec2.classList.remove('sec2Popup');
        sec4.classList.remove('sec4Popup');
        });
    });

    detailPets.addEventListener('click', ()=>{
        popupPet.classList.add('mostrarPets');
        html.classList.add('sombra');
        sec1.classList.add('sec1Popup');
        sec2.classList.add('sec2Popup');
        sec4.classList.add('sec4Popup');
        cerrarPets.addEventListener('click', ()=>{
            popupPet.classList.remove('mostrarPets');
            html.classList.remove('sombra');
            sec1.classList.remove('sec1Popup');
        sec2.classList.remove('sec2Popup');
        sec4.classList.remove('sec4Popup');
        });
    });

    btnPopupluggage.addEventListener('click', ()=>{
        popupLaggage.classList.add('mostrarLuggage');
        html.classList.add('sombra');

        cerrarLuggage.addEventListener('click', ()=>{
            popupLaggage.classList.remove('mostrarLuggage');
            html.classList.remove('sombra');
        });

    });
    
}
popupService();
