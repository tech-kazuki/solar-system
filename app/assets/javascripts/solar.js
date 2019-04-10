$(document).on('turbolinks:load', function() {

  function textInOut (planet, title, text) {
    planet.on('mouseover', function() {
      title.fadeIn(1500);
      text.delay(500).animate({ 'marginTop': '100px', opacity: 'show'}, 2000 );
    }).on('mouseout', function() {
      title.css('display', 'none');
      text.css( 'display', 'none');
    })
  }

  textInOut($('.planet-1'), $('#sun'), $('#sun_text'));
  textInOut($('.planet-2'), $('#mercury'));
  textInOut($('.planet-3'), $('#venus'));
  textInOut($('.planet-4'), $('#earth'));
  textInOut($('.planet-5'), $('#mars'));
  textInOut($('.planet-6'), $('#jupiter'));
  textInOut($('.planet-7'), $('#saturn'));
  textInOut($('.planet-8'), $('#uranus'));
  textInOut($('.planet-9'), $('#neptune'));

});
