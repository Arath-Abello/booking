    function popup(){
        let popupBoton = document.getElementById('popupDetails');
        let html = document.getElementById('sombra');
        let popup = document.getElementById('popup');
        let sec1 = document.getElementById('sec1');
        let sec2 = document.getElementById('sec2');
        let cerrar = document.getElementById('cerrar');

        popupBoton.addEventListener('click', (e)=>{
            html.classList.add('sombra');
            popup.classList.add('mostrar');
            sec1.classList.add('sec1Evento');
            sec2.classList.add('sec2Evento');
            popup.classList.remove('ocultar');
            e.preventDefault(); //ya que redirecciona el formulario así que desctivamos el evento
        });
        cerrar.addEventListener('click', ()=>{
            popup.classList.add('ocultar');
            html.classList.remove('sombra');
            sec1.classList.remove('sec1Evento');
            sec2.classList.remove('sec2Evento');
        });
    }
    popup();
