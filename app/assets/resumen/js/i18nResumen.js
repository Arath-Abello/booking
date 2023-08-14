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
                        code: {
                            code: 'Discount code',
                            apply: 'Apply'
                        },
                        location: {
                            from: 'From',
                            to: 'To',
                            current: 'Current location',
                            airport: 'John F. Kennedy International Airport'
                        },
                        dep: {
                            date: 'Dep date',
                            time: 'Dep time',
                            trip: 'Trip',
                            service: 'Service',
                            rtnDate: 'Rtn date',
                            rtnTime: 'Rtn time',
                            passengers: 'Passengers',
                            notes: 'Notes',
                            mar11: '11 mar 2023',
                            am12: '12:15 am',
                            rTrip: 'Round trip',
                            exclusive: 'Exclusive',
                            mar12: '12 mar 2023',
                            am9: '09:30 am'
                        },
                        price: {
                            ticket: 'Ticket',
                            discount: 'Discount'
                        },
                        btn: {
                            back: 'Back',
                            continue: 'Continue to pay'
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
                        code: {
                            code: 'Código de descuento',
                            apply: 'Aplicar'
                        },
                        location: {
                            from: 'De',
                            to: 'A',
                            current: 'Ubicación actual',
                            airport: 'Aeropuerto internacional John F. Kennedy'
                        },
                        dep: {
                            date: 'Fecha DEP',
                            time: 'Tiempo depósito',
                            trip: 'Viaje',
                            service: 'Servicio',
                            rtnDate: 'Fecha RTN',
                            rtnTime: 'Tiempo RTN',
                            passengers: 'Pasajeros',
                            notes: 'Notas',
                            mar11: '11 de marzo de 2023',
                            am12: '12:15 am',
                            rTrip: 'Ida y vuelta',
                            exclusive: 'Exclusivo',
                            mar12: '12 de marzo de 2023',
                            am9: '09:30 am'
                        },
                        price: {
                            ticket: 'Boleto',
                            discount: 'Descuento'
                        },
                        btn: {
                            back: 'Atrás',
                            continue: 'Continuar pagando'
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
                        code: {
                            code: 'Código de desconto',
                            apply: 'Aplicar'
                        },
                        location: {
                            from: 'De',
                            to: 'Para',
                            current: 'Localização atual',
                            airport: 'John F. Kennedy International Airport'
                        },
                        dep: {
                            date: 'Dep Data',
                            time: 'Tempo dep',
                            trip: 'Viagem',
                            service: 'Serviço',
                            rtnDate: 'Data RTN',
                            rtnTime: 'Tempo rtn',
                            passengers: 'Passageiros',
                            notes: 'Notas',
                            mar11: '11 de março de 2023',
                            am12: '12:15 am',
                            rTrip: 'Ida e volta',
                            exclusive: 'Exclusivo',
                            mar12: '12 de março de 2023',
                            am9: '09:30 am'
                        },
                        price: {
                            ticket: 'Bilhete',
                            discount: 'Desconto'
                        },
                        btn: {
                            back: 'Voltar',
                            continue: 'Continue a pagar'
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



