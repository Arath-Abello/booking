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
                       congrat: {
                        title: 'Congratulations!',
                        infoCongrat: 'Your purchase was successfully booked.',

                        title2: 'Confirmation message',
                        title3: 'Keep in touch',
                        title4: 'Customer Support',
                        
                        pInfoTicket: "Your ticket ID is 13990. We sent you a confirmation email to demo@gmail.com, please check your Spam folder if you don't find it.",
                        pInfoSms: 'We also sent a confirmation SMS to +1 888 5544.',
                        pInfoTouch: "When your trip's time comes closer, Check your Phone! We will keep in touch with you and notify you via SMS on the following instances:",
                        listTouch1: 'When a driver is assigned to you. For your convenience, he may also call you.',
                        listTouch2: 'When the driver is on his way.',
                        listTouch3: 'When the driver is outside your home.',
                        listTouch4: 'If you need to modify your trip, please contact us at demo@gmail.com',
                        listTouch5: 'Make sure you hold all of your belongings before abandoning the bus.',
                        listTouch6: 'Cancellations need to be communicated within 4-hour',

                        dashboard: 'Go to dashboard'
                       }
                    }
                },
                'es-ES': {
                    translation: {
                        congrat: {
                            title: '!Felicidades¡',
                            infoCongrat: 'Su compra fue reservada con éxito.',

                            title2: 'Mensaje de confirmacion',
                            title3: 'Mantenerse en contacto',
                            title4: 'Atención al cliente',
                            
                            pInfoTicket: 'Su ID de boleto es 13990. Le enviamos un correo electrónico de confirmación a demo@gmail.com, consulte su carpeta de spam si no la encuentra.',
                            pInfoSms: 'También enviamos un SMS de confirmación a +1 888 5544.',
                            pInfoTouch: 'Cuando se acerque la hora de su viaje, ¡revise su teléfono! Nos mantendremos en contacto con usted y le notificaremos a través de SMS en los siguientes casos:',
                            listTouch1: 'Cuando se le asigna un controlador. Para su conveniencia, él también puede llamarlo.',
                            listTouch2: 'Cuando el conductor está en camino.',
                            listTouch3: 'Cuando el conductor está fuera de su casa.',
                            listTouch4: 'Si necesita modificar su viaje, comuníquese con nosotros en demo@gmail.com',
                            listTouch5: 'Asegúrese de sostener todas sus pertenencias antes de abandonar el autobús.',
                            listTouch6: 'Las cancelaciones deben comunicarse dentro de las 4 horas',

                            dashboard: 'Ir al panel de control'
                        }
                    }
                },
                'pt': {
                    translation: {
                        congrat: {
                            title: 'Parabéns!',
                            infoCongrat: 'Sua compra foi reservada com sucesso.',

                            title2: 'Mensagem de confirmação',
                            title3: 'Mantenha contato',
                            title4: 'Suporte ao cliente',
                            
                            pInfoTicket: 'Seu ID do ingresso é 13990. Enviamos um email de confirmação para demonstração@gmail.com, verifique sua pasta de spam se não o encontrar.',
                            pInfoSms: 'Também enviamos um SMS de confirmação para +1 888 5544.',
                            pInfoTouch: 'Quando a hora da sua viagem chegar mais perto, verifique seu telefone! Vamos manter contato com você e notificá -lo via SMS nas seguintes instâncias:',
                            listTouch1: 'Quando um motorista é atribuído a você. Para sua conveniência, ele também pode ligar para você.',
                            listTouch2: 'Quando o motorista está a caminho.',
                            listTouch3: 'Quando o motorista está fora de sua casa.',
                            listTouch4: 'Se você precisar modificar sua viagem, entre em contato conosco em Demo@gmail.com',
                            listTouch5: 'Certifique -se de manter todos os seus pertences antes de abandonar o ônibus.',
                            listTouch6: 'Os cancelamentos precisam ser comunicados dentro de 4 horas',

                            dashboard: 'Ir para a dashboard'
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



