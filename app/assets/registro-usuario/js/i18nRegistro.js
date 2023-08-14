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
                            title: 'Create an account',
                            route: 'Routa',
                            vehicle: 'Vehicle',
                            details: 'Details',
                            payment: 'Payment'
                        },
                       register: {
                        fName: 'First name',
                        lName: 'Last name',
                        email: 'Email',
                        cPass: 'Confirm password',
                        pass: 'Password',
                        pNumber: 'Phone number',
                        infoNumber: '(This is to keep you posted of your trip)',
                        pInfoAgree: "I agree with WeTransport's Terms & Conditions",
                        back: 'Back',
                        create: 'Create account'
                       }
                    }
                },
                'es-ES': {
                    translation: {
                        progressBar: {
                            title: 'Crea una cuenta',
                            route: 'Ruta',
                            vehicle: 'Vehiculo',
                            details: 'Detalles',
                            payment: 'Pago'
                        },
                       register: {
                        fName: 'Nombre de pila',
                        lName: 'Apellido',
                        email: 'Correo electrónico',
                        cPass: 'Confirmar Contraseña',
                        pass: 'Contraseña',
                        pNumber: 'Número de teléfono',
                        infoNumber: '(esto es para mantenerlo informado de su viaje)',
                        pInfoAgree: "Estoy de acuerdo con los términos y condiciones de Wetransport",
                        back: 'Atrás',
                        create: 'Crea una cuenta'
                       }
                    }
                },
                'pt': {
                    translation: {
                        progressBar: {
                            title: 'Crie a sua conta aqui',
                            route: 'Rota',
                            vehicle: 'Veículo',
                            details: 'Detalhes',
                            payment: 'Pagamento'
                        },
                       register: {
                        fName: 'Primeiro nome',
                        lName: 'Sobrenome',
                        email: 'E-mail',
                        cPass: 'Confirme sua senha',
                        pass: 'Senha',
                        pNumber: 'número de telefone',
                        infoNumber: '(isso é para mantê -lo informado da sua viagem)',
                        pInfoAgree: "Eu concordo com os termos e condições de Wetransport",
                        back: 'Voltar',
                        create: 'Crie a sua conta aqui'
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



