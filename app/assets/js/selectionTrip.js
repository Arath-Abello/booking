function selectionTrip(e) {
    
    let seleccion = document.getElementsByClassName('btnSelection');
    for (let i = 0; i < seleccion.length; i++) {
        seleccion[i].addEventListener('click', function(event) {
            let target = event.currentTarget;
            target.classList.add('colorBtnSeleccion');
            
            for (let j = 0; j < seleccion.length; j++) {
                if (seleccion[j] !== target) {
                    seleccion[j].classList.remove('colorBtnSeleccion');
                }
            }
        });
    }
}

selectionTrip();
