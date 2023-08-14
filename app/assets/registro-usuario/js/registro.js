$(document).ready(function() {
    $('#paises').select2({
      templateResult: formatOption,
      escapeMarkup: function(markup) {
        return markup;
      }
    });
  
    // Obtén los datos de los países, incluyendo la URL de las imágenes
    var countriesData = [
      { id: '1', text: 'Estados Unidos', image: '../img/uuee.jpg' },
      // Agrega más países y sus imágenes aquí
    ];
  
    // Rellena las opciones del select con los datos de los países
    countriesData.forEach(function(country) {
      var $option = $('<option value="' + country.text + '">' + country.text + '</option>');
      $('#paises').append($option);
    });
  
    // Escucha el evento de cambio en el select de países
    $('#paises').on('change', function() {
      var selectedCountry = $(this).val();
      var selectedOption = $(this).find('option:selected');
      var imageUrl = selectedOption.data('image');
  
      // Actualiza la imagen en la etiqueta span
      $('.selected-country').html('<img src="' + imageUrl + '" class="country-img" />' + selectedCountry);
    });
  });
  
  function formatOption(option) {
    if (!option.id) {
      return option.text;
    }
  
    var imageUrl = option.image;
    var $option = $('<span><img src="' + imageUrl + '" class="country-img" /> ' + option.text + '</span>');
  
    return $option;
  }