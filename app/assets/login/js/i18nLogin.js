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
                        log: {
                            loginTitle: 'Login',
                            pinfoLogin: 'Have you travelled with us before? If so, you can log in with your email.',
                            passForgot: 'Forgot your password?',
                            back: 'Back',
                            login: 'Login',
                            email: 'Email',
                            pass: 'Password'
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
                        log: {
                            loginTitle: 'Acceso',
                            pinfoLogin: '¿Has viajado con nosotros antes? Si es así, puede iniciar sesión con su correo electrónico.',
                            passForgot: '¿Olvidaste tu contraseña?',
                            back: 'Atrás',
                            login: 'Acceso',
                            email: 'Correo electrónico',
                            pass: 'Contraseña'
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
                        log: {
                            loginTitle: 'Conecte-se',
                            pinfoLogin: 'Você já viajou conosco antes? Nesse caso, você pode fazer login com seu e -mail.',
                            passForgot: 'Esqueceu sua senha?',
                            back: 'Voltar',
                            login: 'Conecte-se',
                            email: 'E-mail',
                            pass: 'Senha'
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



