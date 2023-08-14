

const lngs = {
    en: { nativeName: 'English' },
    sp: { nativeName: 'Spanish' },
    pt: { nativeName: 'Portuguese' }
};

const rerender = () => {
    // start localizing, details:
    // https://github.com/i18next/jquery-i18next#usage-of-selector-function
    $('body').localize();
}

$(function () {
    let body = $('body');
    // use plugins and options as needed, for options, detail see
    // https://www.i18next.com
    i18next
        // detect user language
        // learn more: https://github.com/i18next/i18next-browser-languageDetector
        .use(i18nextBrowserLanguageDetector)
        // init i18next
        // for all options read: https://www.i18next.com/overview/configuration-options
        .init({
            debug: true,
            fallbackLng: ['es-ES', 'en', 'pt'],
            resources: {
                'en': {
                    translation: {
                        progressBar: {
                            title: 'Request Code',
                            route: 'Route',
                            vehicle: 'Vehicle',
                            details: 'Details',
                            payment: 'payment'
                        },
                        route: {
                            title: 'Select route',
                            from: 'From Airport',
                            to: 'To Airport'
                        },
                        location: {
                            from: 'From',
                            to: 'To',
                            currentLocation: 'Current location',
                            InternationalAirport: 'John F. Kennedy International Airport'
                        },
                        formDate: {
                            dateTitle: 'Departure Date',
                            timeTitle: 'Departure time'
                        },
                        selectionTrip: {
                            select: 'Select trip',
                            btn1: 'One way',
                            btn2: 'Round trip',
                            discount: '5% discount'
                        },
                        return: {
                            rTime: 'Return Date',
                            rDate: 'Return Time'
                        },
                        popup: {
                            title1: 'Van Arrival',
                            title2: 'Airport Departures',
                            title3: 'Plan Your Time',
                            title4: 'Travel Times',

                            info1: 'This is the time at which you want the Van to arrive home or your flight arrival time.',
                            info2: 'For departures from the airport, we will wait for you regardless if your flight is delayed.',
                            info3: 'Please plan your pickup time to arrive to the airport with adequate time to do airport tasks.',
                            info4: 'Travel times normally take 40 minutes for Exclusive transports and 1 hours 20 min for shared transports.'
                        },
                        find: {
                            vehicle: 'Find vehicle'
                        },
                        moreInfo: {
                            close: 'Close & continue purchase',
                            terms: 'Check our Terms & Conditions'
                        }
                    }
                },
                'es-ES': {
                    translation: {
                        progressBar: {
                            title: 'Código de solicitud',
                            route: 'Ruta',
                            vehicle: 'Vehiculo',
                            details: 'Detalles',
                            payment: 'pago'
                        },
                        route: {
                            title: 'Seleccionar ruta',
                            from: 'Desde aeropuerto',
                            to: 'Al aeropuerto'
                        },
                        location: {
                            from: 'Desde',
                            to: 'Al',
                            currentLocation: 'ubicación actual',
                            InternationalAirport: 'Aeropuerto Internacional John F. Kennedy'
                        },
                        formDate: {
                            dateTitle: 'Fecha de partida',
                            timeTitle: 'Hora de partida'
                        },
                        selectionTrip: {
                            select: 'Seleccionar viaje',
                            btn1: 'De una sola mano',
                            btn2: 'Ida y vuelta',
                            discount: '5% de descuento'
                        },
                        return: {
                            rTime: 'Tiempo de Retorno',
                            rDate: 'Fecha de Regreso'
                        },
                        popup: {
                            title1: 'Llegada de camioneta',
                            title2: 'Salida del aeropuerto',
                            title3: 'Planificar tu tiempo',
                            title4: 'Tiempos de viaje',

                            info1: 'Este es el momento en el que desea que la camioneta llegue a casa o la hora de llegada de su vuelo.',
                            info2: 'Para las salidas del aeropuerto, lo esperaremos independientemente de si su vuelo se retrasa.',
                            info3: 'Planifique su tiempo de recogida para llegar al aeropuerto con tiempo adecuado para realizar tareas del aeropuerto.',
                            info4: 'Los tiempos de viaje normalmente tardan 40 minutos para transportes exclusivos y 1 horas 20 minutos para transportes compartidos.'
                        },
                        find: {
                            vehicle: 'Encontrar vehículo'
                        },
                        moreInfo: {
                            close: 'Cerrar y continuar compra',
                            terms: 'Verifique nuestros términos y condiciones'
                        }
                    }
                },
                'pt': {
                    translation: {
                        progressBar: {
                            title: 'Solicitar cotação',
                            route: 'Rota',
                            vehicle: 'Veículo',
                            details: 'Detalhes',
                            payment: 'Pagamento'
                        },
                        route: {
                            title: 'Selecione a rota',
                            from: 'do aeroporto',
                            to: 'para o aeroporto'
                        },
                        location: {
                            from: 'De',
                            to: 'Para',
                            currentLocation: 'Localização atual',
                            InternationalAirport: 'John F. Kennedy International Airport'
                        },
                        formDate: {
                            dateTitle: 'Data de partida',
                            timeTitle: 'Hora de partida'
                        },
                        selectionTrip: {
                            select: 'Selecione Trip',
                            btn1: 'Mão Única',
                            btn2: 'Ida e volta',
                            discount: '5% de desconto'
                        },
                        return: {
                            rTime: 'Tempo de retorno',
                            rDate: 'Data de retorno'
                        },
                        popup: {
                            title1: 'Van chegando',
                            title2: 'Partidas do aeroporto',
                            title3: 'Planeje seu tempo',
                            title4: 'Tempos de viagem',

                            info1: 'Este é o momento em que você deseja que a van chegue em casa ou na hora da chegada do voo.',
                            info2: 'Para os partidos do aeroporto, esperaremos por você, independentemente se o seu voo estiver atrasado.',
                            info3: 'Planeje seu tempo de coleta para chegar ao aeroporto com tempo adequado para realizar tarefas do aeroporto.',
                            info4: 'Os tempos de viagem normalmente levam 40 minutos para transportes exclusivos e 1 horas 20 minutos para transportes compartilhados.'
                        },
                        find: {
                            vehicle: 'Encontre veículo'
                        },
                        moreInfo: {
                            close: 'Feche e continue compra',
                            terms: 'Verifique nossos termos e condições'
                        }
                    }
                }
            }
        }, (err, t) => {
            if (err) return console.error(err);

            // for options see
            // https://github.com/i18next/jquery-i18next#initialize-the-plugin
            jqueryI18next.init(i18next, $, { useOptionsAttr: true });

            let eu = $('#eeuu');
            eu.click(function () {
                changeLanguage('en');
               
            });

            let de = $('#spain');
            de.click(function () {
                changeLanguage('es-ES');
                
            });

            let br = $('#br');
            br.click(function () {
                changeLanguage('pt');
                
            });

            // Detectar el idioma del navegador al inicio y cambiar al español si es necesario
            const detectedLanguage = i18next.language || window.navigator.language || window.navigator.userLanguage;
            if (detectedLanguage.startsWith('es')) {
                changeLanguage('es-ES');
            } else {
                const fallbackLanguage = i18next.options.fallbackLng[1];
                changeLanguage(fallbackLanguage);
            }


            function changeLanguage(language) {
                i18next.changeLanguage(language, () => {
                    if(language === 'es-ES'){
                        body.addClass('es-ES');
                    }else{
                        body.removeClass('es-ES');
                    }
                    if(language === 'en'){
                        body.addClass('en');
                    }else{
                        body.removeClass('en');
                    }
                    if(language === 'pt'){
                        body.addClass('pt');
                    }else{
                        body.removeClass('pt');
                    }
                    rerender();
                });
            }
            
        });
});



