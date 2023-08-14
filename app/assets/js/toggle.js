function toggle(e){
    
    let inputFromAirport = document.getElementById('fromAirport');
    let inputToAirport = document.getElementById('toAirport');
    let slider = document.getElementById('slider');
    let label1 = document.getElementById('label1');
    let label2 = document.getElementById('label2');
    let iconos = document.getElementById('iconos');
    let location = document.getElementById('infLocation');

    inputToAirport.addEventListener('click', ()=>{
        slider.classList.add('toAirport');
        label1.classList.add('colorLabel1');
        label2.classList.add('colorLabel2');
        iconos.classList.add('iconsReverse');
        location.classList.add('locationReverse');
    });
    inputFromAirport.addEventListener('click', ()=>{
        slider.classList.remove('toAirport');
        label1.classList.remove('colorLabel1');
        label2.classList.remove('colorLabel2');
        iconos.classList.remove('iconsReverse');
        location.classList.remove('locationReverse');
    });
    
}
toggle();

function toggleFlechas(){
    
    let flechas = document.getElementById('flechas');
    let iconos = document.getElementById('iconos');
    let location = document.getElementById('infLocation');
    flechas.addEventListener('click', ()=>{
        iconos.classList.toggle('iconsReverse'); //elimina o añade la clase. En este caso si existe la clase así que la elimina o añade por cada click.
        location.classList.toggle('locationReverse');
    });
}
toggleFlechas();

