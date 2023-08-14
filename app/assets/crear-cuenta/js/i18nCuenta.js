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
                        create: {
                            title: 'Create an account',
                            pInfo: 'Have you travelled with us before? If so, you can log in with your email.',

                            loginTitle: 'Log in with your email',
                            pInfoLogin: 'Log in with your email for a faster experience.',
                            
                            createTitle: 'Create an account',
                            pInfoCreate: 'Registration is necessary to handle the reservation correctly.',
                            backService: 'Back to service selection'
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
                        create: {
                            title: 'Crea una cuenta',
                            pInfo: '¿Has viajado con nosotros antes? Si es así, puede iniciar sesión con su correo electrónico.',
                            
                            loginTitle: 'Inicie sesión con su correo electrónico',
                            pInfoLogin: 'Inicie sesión con su correo electrónico para una experiencia más rápida.',
                            
                            createTitle: 'Crea una cuenta',
                            pInfoCreate: 'El registro es necesario para manejar la reserva correctamente.',
                            backService: 'Volver a la selección del servicio'
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
                        create: {
                            title: 'Crie a sua conta aqui',
                            pInfo: 'Você já viajou conosco antes? Nesse caso, você pode fazer login com seu e -mail.',

                            loginTitle: 'Faça login com seu e -mail',
                            pInfoLogin: 'Faça login com seu e -mail para uma experiência mais rápida.',
                            
                            createTitle: 'Crie a sua conta aqui',
                            pInfoCreate: 'O registro é necessário para lidar com a reserva corretamente.',
                            backService: 'Voltar para a seleção de serviço'
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



