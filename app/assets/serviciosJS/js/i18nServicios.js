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
                            title: 'Request Quote',
                            route: 'Route',
                            vehicle: 'vehicle',
                            details: 'Details',
                            payment: 'Payment'
                        },
                        service: {
                            title: 'Select service'
                        },
                        exclusive: {
                            exclusivev: 'exclusive',
                            shared: 'shared'
                        },
                        time: {
                            time: 'Pickup Time 10:30/10:40'
                        },
                        passenger: {
                            passengers: 'Select passengers',
                            pets: 'Add pets',
                            travelPets: 'I am traveling with pets',
                            luggage: 'View Included Luggage',
                            notes: 'Notes'
                        },
                        btn: {
                            linkBack: 'Back',
                            linkProceed: 'Proceed'
                        },
                        popuService: {
                            title1: 'Shared transport',
                            pInfo1: 'You will share this transports with other passengers. Please consider that after we pick you up, we might pick other passengers.',
                            pInfo1_2: 'Estimated travel time: 1 - 1.5 hrs',

                            title2: 'Exclusive transport',
                            pInfo2_2: "The van is just for you and your companions you won't have to wait for other passengers.",
                            pInfo2_3: 'Estimated travel time: 40 min - 1 hr',

                            close: 'Close & continue purchase',
                            check: 'Check our Terms & Conditions'
                        },
                        popupPets: {
                            title1: "It's law",
                            pInfo1p: "By law, we can't allow pets on the front seat.",

                            title2: '10kg dogs',
                            pInfo2p: 'Dogs of up to 10kg can be seated, if they are buckled with a harness.',

                            title3: 'Over 10kg',
                            pInfo3p: 'Dogs weighting over 10kg, along with other pets, must remain in their kennel or cage.',

                            close: 'Close & continue purchase',
                            check: 'Check our Terms & Conditions'
                        },
                        popupLuggage: {
                            title1: 'Shared transport',
                            pInfo1: 'Each passenger is allowed one of each of these luggage. If you need more luggage, you can book an additional seat, or switch to an Exclusive Transport.',

                            title2: 'Select only one luggage for shared transport',
                            title2_2: 'Checked Baggage',
                            title2_3: 'Cabin Baggage',
                            title2_4: 'Personal Item',
                            title3: 'Exclusive transport',
                            title3_2: 'Allowed to add luggage until the van capacity is filled.',

                            pInfo2_2: '27kg - One',
                            pInfo2_3: '7kg - One',
                            pInfo2_4: '4kg - One',
                            pInfo3: 'The entire group can fill the capacity of the van. It is forbidden to carry luggage on the seats where passengers are seated.',

                            close: 'Close & continue purchase',
                            check: 'Check our Terms & Conditions'
                        }
                    }
                },
                'es-ES': {
                    translation: {
                        progressBar: {
                            title: 'Solicitud de cotización',
                            route: 'Ruta',
                            vehicle: 'vehiculo',
                            details: 'Detalles',
                            payment: 'Pago'
                        },
                        service: {
                            title: 'Seleccione Servicio'
                        },
                        exclusive: {
                            exclusivev: 'exclusivo',
                            shared: 'Compartido'
                        },
                        time: {
                            time: 'Tiempo de recogida 10:30/10:40'
                        },
                        passenger: {
                            passengers: 'Seleccionar pasajeros',
                            pets: 'Agregar mascotas',
                            travelPets: 'Viajo con mascotas',
                            luggage: 'Ver el equipaje incluido',
                            notes: 'Notas'
                        },
                        btn: {
                            linkBack: 'Atrás',
                            linkProceed: 'Proceder'
                        },
                        popuService: {
                            title1: 'Transporte compartido',
                            pInfo1: 'Compartirás este transporte con otros pasajeros. Tenga en cuenta que después de que lo recogamos, podríamos elegir a otros pasajeros.',
                            pInfo1_2: 'Tiempo de viaje estimado: 1 - 1.5 horas',

                            title2: 'Transporte exclusivo',
                            pInfo2_2: 'La camioneta es solo para usted y sus compañeros, no tendrá que esperar a otros pasajeros.',
                            pInfo2_3: 'Tiempo de viaje estimado: 40 min - 1 hora',

                            close: 'Cerrar y continuar compra',
                            check: 'Verifique nuestros términos y condiciones'
                        },
                        popupPets: {
                            title1: 'Es ley',
                            pInfo1p: 'Por ley, no podemos permitir a las mascotas en el asiento delantero.',

                            title2: 'Perros de 10 kg',
                            pInfo2p: 'Los perros de hasta 10 kg pueden sentarse, si están abrochados con un arnés.',

                            title3: 'Más de 10 kg',
                            pInfo3p: 'Los perros que ponderan más de 10 kg, junto con otras mascotas, deben permanecer en su perrera o jaula.',

                            close: 'Cerrar y continuar compra',
                            check: 'Verifique nuestros términos y condiciones'
                        },
                        popupLuggage: {
                            title1: 'Transporte compartido',
                            pInfo1: 'A cada pasajero se le permite uno de cada uno de estos equipos. Si necesita más equipaje, puede reservar un asiento adicional o cambiar a un transporte exclusivo.',

                            title2: 'Seleccione solo un equipaje para el transporte compartido',
                            title2_2: 'Equipaje facturado',
                            title2_3: 'Equipaje de cabina',
                            title2_4: 'Objeto personal',
                            title3: 'Transporte exclusivo',
                            title3_2: 'Permitido agregar equipaje hasta que se llene la capacidad de la camioneta.',

                            pInfo2_2: '27 kg - uno',
                            pInfo2_3: '7 kg - uno',
                            pInfo2_4: '4 kg - uno',
                            pInfo3: 'Todo el grupo puede llenar la capacidad de la camioneta. Está prohibido llevar equipaje en los asientos donde los pasajeros están sentados.',

                            close: 'Cerrar y continuar compra',
                            check: 'Verifique nuestros términos y condiciones'
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
                        service: {
                            title: 'Selecione Serviço'
                        },
                        exclusive: {
                            exclusivev: 'exclusivo',
                            shared: 'Compartilhado'
                        },
                        time: {
                            time: 'Hora de coleta 10:30/10:40'
                        },
                        passenger: {
                            passengers: 'Selecione passageiros',
                            pets: 'Adicione animais de estimação',
                            travelPets: 'Estou viajando com animais de estimação',
                            luggage: 'A visão incluía bagagem',
                            notes: 'Notas'
                        },
                        btn: {
                            linkBack: 'Voltar',
                            linkProceed: 'Continuar'
                        },
                        popuService: {
                            title1: 'Transporte compartilhado',
                            pInfo1: 'Você compartilhará esses transportes com outros passageiros. Por favor, considere que depois que buscamos você, podemos escolher outros passageiros.',
                            pInfo1_2: 'Tempo de viagem estimado: 1 - 1,5 horas',

                            title2: 'Transporte exclusivo',
                            pInfo2_2: 'A van é apenas para você e seus companheiros, você não terá que esperar por outros passageiros.',
                            pInfo2_3: 'Tempo de viagem estimado: 40 min - 1 hora',

                            close: 'Feche e continue compra',
                            check: 'Verifique nossos termos e condições'
                        },
                        popupPets: {
                            title1: 'É lei',
                            pInfo1p: 'Por lei, não podemos permitir animais de estimação no banco da frente.',

                            title2: 'Cães de 10 kg',
                            pInfo2p: 'Cães de até 10 kg podem ser sentados, se estiverem presos com um arnês.',

                            title3: 'Mais de 10 kg',
                            pInfo3p: 'Os cães que ponderam mais de 10 kg, juntamente com outros animais de estimação, devem permanecer em seu canil ou gaiola.',

                            close: 'Feche e continue compra',
                            check: 'Verifique nossos termos e condições'
                        },
                        popupLuggage: {
                            title1: 'Transporte compartilhado',
                            pInfo1: 'Cada passageiro é permitido uma dessas bagagens. Se você precisar de mais bagagem, pode reservar um assento adicional ou mudar para um transporte exclusivo.',

                            title2: 'Selecione apenas uma bagagem para transporte compartilhado',
                            title2_2: 'Bagagem despachada',
                            title2_3: 'Bagagem de cabine',
                            title2_4: 'Item pessoal',
                            title3: 'Transporte exclusivo',
                            title3_2: 'Permitido adicionar bagagem até que a capacidade da van seja preenchida.',

                            pInfo2_2: '27kg - um',
                            pInfo2_3: '7kg - um',
                            pInfo2_4: '4kg - um',
                            pInfo3: 'Todo o grupo pode preencher a capacidade da van. É proibido levar bagagem nos assentos onde os passageiros estão sentados.',

                            close: 'Feche e continue compra',
                            check: 'Verifique nossos termos e condições'
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



