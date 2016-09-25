$(document).ready(function() {
  init_check_hash();
  init_text_wait();
  init_active_nav();
  init_back_to_top();
  init_plugins();
  init_btn_open_content();
  init_nav_event();
  init_btn_love();
  init_modal_optional();
  init_validator();
});

function init_modal_optional() {
  if ($('.ajax_link').length > 0) {
    $('.ajax_link').click(function(e) {
      var html = $(this).attr("href");
      $('#modal').html("").load(html);
      $('#modal').modal('show');
      return false;
    });
  }
}

function init_btn_love() {
  $('.love-post-btn a').click(function() {
    var current_like = parseInt($(this).text());
    $(this).html('<span><i class="fa fa-heart"></i> ' + (current_like + 1) + '</span>');
    return false;
  });
}

function init_plugins() {
  $('[data-toggle=tooltip]').tooltip();
  $('#portfolio-grid').mixitup();
  $("#navigation").autofix_anything({
    onlyInContainer: true
  });
  $('.image-popup').magnificPopup({type: 'image', preloader: true});
  $('.popup-iframe').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
}

function init_back_to_top() {
  $('#backtotop').click(function() {
    $("html,body").animate({
      scrollTop: $('#wrapper').offset().top
    }, 600, function() {
    });
    return false;
  });
}

function init_btn_open_content() {
  $('#open-content').click(function() {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.img-arrow, #main-content').fadeIn();
      $('.navigation-list a[href="#about"]').tab('show')
      $("html,body").animate({
        scrollTop: $('#main-content').offset().top
      }, 600, function() {
      });
    } else {
      $("html,body").animate({
        scrollTop: $('#wrapper').offset().top
      }, 600, function() {
        $('.img-arrow, #main-content').fadeOut();
        $('#open-content').text('About Me');
      });
    }
  });
}

function init_nav_event() {
  $('.navigation-list a').click(function(e) {
    $(this).tab('show');
    $('#open-content').text($(this).text());
    $("html,body").animate({
      scrollTop: $('#main-content').offset().top
    }, 600, function() {
    });
    location.hash = $(this).attr('href');
    return false;
  });
}

function init_active_nav() {
  $('.navigation-list li').click(function() {
    $('.navigation-list li').removeClass('active');
    $(this).addClass('active');
  });
  $('.changetab').click(function() {
    href = $(this).attr('href');
    $("#navigation a[href="+href+"]").click()
    return false
  });
  
}

function init_text_wait() {
  $('#wait-page').fadeOut("slow", function() {
    $('#wrapper').fadeIn("slow");
  });
}

function init_check_hash() {
  hash = (window.location.hash) ? window.location.hash : "#about";
  window.location.hash = hash
  if (hash) {
    var pages = ["#about", "#resume", "#contact", "#blog"]
    if ($.inArray(hash, pages) > -1) {
      $('.navigation-list a[href="' + hash + '"]').tab('show');
      $('#open-content').text($('.navigation-list a[href="' + hash + '"]').text()).addClass('active');
      $('.img-arrow, #main-content').fadeIn(function() {
        $("html,body").animate({
          scrollTop: $('#main-content').offset().top
        }, 600, function() {
        });
      });
    }
  }
}

function theme_option(selector) {
  var css = $(selector).data('css');
  if (css == "default") {
    $('.them-option').remove();
  } else {
    $('head').append('<link href="assets/css/theme-option/' + css + '.css" rel="stylesheet" class="them-option">');
  }
  $('#modal').modal('hide');
  return false;
}

function init_validator() {
  $("#form").bootstrapValidator();
  $("#form").on("submit", function(){
    if (!($("#form").data('bootstrapValidator').isValid())){
      $("#form button").attr("disabled",false)
      return false;
    }else{
      send_mail();
      return false
    }
  })
  return false
}
function send_mail(){
   var request = $.ajax({
      url: "send.php",
      type: "POST",
      data: $("#form").serialize(),
      dataType: "html"
    });
    request.done(function( msg ) {
      $("#form .alert").show()
      $("#form button").attr("disabled",false)
    });
    
    return false
}
$(window).load(function() {
  $('.imgWrapper img').animate({opacity: '1.0'}, 1000, function() {
    $(this).css('filter', 'none');
  });
});


