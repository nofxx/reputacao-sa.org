$(function () {
  if ($('#root').hasClass('companies-page')) {
    // TOGGLE MENU
    $('.toggle-menu').on('click', function (e) {
      e.preventDefault();
      $('nav.nav').toggleClass('open-nav');
    });
    // TOGGLE SEARCH
    $('.open-search').on('click', function (e) {
      e.preventDefault();
      $('.panel.search-panel').toggleClass('open');
    });
  }

  // HIGHLIGHT SEARCH ON FOCUS
  if ($('#root').hasClass('home-page')) {
    $('.search input, .search .search-button').focus(function(){
      $('.search').addClass('focused');
    }).blur(function(){
      $('.search').removeClass('focused');
    });
  }
});

function updateCounter(finalValue) {
  var initialValue = element.text();

  function update() {
    element.text(Math.ceil(this.value));
  }

  $({value: initialValue}).animate({value: finalValue}, {
    duration: 1000,
    step: update,
    complete: update
  });
}
