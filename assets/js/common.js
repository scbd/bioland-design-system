// UN3 Theme
// Common Javascript functions

$(() => {
  $('.un3-card-slider').slick({
    dots: false,
    infinite: false,
    draggable: true,
    speed: 300,
    // focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1248,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 752,
        settings: {
          slidesToShow: 2.167,
          slidesToScroll: 2
        }
      }
    ]
  });

  $('.un3-card-featured-slider').slick({
    dots: false,
    infinite: false,
    draggable: true,
    speed: 300,
    // focusOnSelect: true,
    slidesToShow: 2.4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1248,
        settings: {
          slidesToShow: 1.7142, // Each card is 7 columns
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1.5, // Each card is 8 columns
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 752,
        settings: {
          slidesToShow: 1.091,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.un3-liveschedule-slider').slick({
    dots: false,
    infinite: false,
    draggable: true,
    speed: 300,
    centerMode: true,
    focusOnSelect: true,
    slidesToShow: 13,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 1248,
        settings: {
          slidesToShow: 11, // Each card is 7 columns
          slidesToScroll: 11,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 9, // Each card is 8 columns
          slidesToScroll: 9,
        }
      },
      {
        breakpoint: 752,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      }
    ]
  });

  $('.un3-liveschedule-slider').slick('slickGoTo', 7)


  // For the home pages, clicking on top row of slider replaces the top element.
  $('.un3-home-jumbotron-slider').slick({
    slidesToShow: 1, 
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    adaptiveHeight: false,
    asNavFor: '.un3-home-top-slider, .un3-home-jumbotron-slider' 
  });
  $('.un3-home-top-slider').slick({
    dots: false,
    infinite: false,
    draggable: true,
    speed: 300,
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1248,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 752,
        settings: {
          slidesToShow: 2.167,
          slidesToScroll: 1
        }
      }
    ],
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    asNavFor: '.un3-home-jumbotron-slider'
  });


  $('.un3-dams-home-slider').slick({
    slidesToShow: 1, 
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    adaptiveHeight: false,
  });

  // Show smaller font size if jumbotron heading is long.
  if ($('h1.jumbotron-heading').length) {
    var pageTitleLength = $('h1.jumbotron-heading').text().length
    if (pageTitleLength > 15) {
      $('h1.jumbotron-heading').removeClass('display-1')
      if (pageTitleLength > 30) {
        if (pageTitleLength > 45) {
          $('h1.jumbotron-heading').addClass('display-4')
        } else {
          $('h1.jumbotron-heading').addClass('display-3')
        }
      } else {
        $('h1.jumbotron-heading').addClass('display-2')
      }
    }
  }
console.log('long')
});


// Show the right mobile menu for category pages depending on URL Parameters.
if ($('.is-category').length) {
  var urlParams = new URLSearchParams(window.location.search);
  var source = '';
  if (urlParams.has('source')) {
    source = urlParams.get('source');
  }

  switch (source) {
    case 'avlibrary':
      $('body').addClass('is-avlibrary')
      break
    case 'avlibrarypro':
      $('body').addClass('is-avlibrarypro')
      break
    case 'photo':
      $('body').addClass('is-photo')
      break
    case 'webtv':
      $('body').addClass('is-webtv')
      break
    default:
      $('body').addClass('is-mediahome')
      break
  }

  href = $('.un3-categories-normal .card-link').attr('href')
  if (href.includes('?')) {
    $('.un3-categories-normal .card-link').attr('href', href + '&' + urlParams)
  } else {
    $('.un3-categories-normal .card-link').attr('href', href + '?' + urlParams)
  }
}

// Prevent closing by clicking inside mega menu.
$(document).on('click', '.megamenu', function (e) {
  e.stopPropagation();
});
