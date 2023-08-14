function passengers(){
    let passengers = document.getElementsByClassName('btnPassengers');

    for(i=0; i<passengers.length; i++){
        passengers[i].addEventListener('click', (e)=>{
            let seleccionado = e.currentTarget;
            seleccionado.classList.add('colorPassengers');

            for(j=0; j<passengers.length; j++){
                if(passengers[j] !== seleccionado){
                    passengers[j].classList.remove('colorPassengers');
                }
            }
        });
    }
}
passengers();