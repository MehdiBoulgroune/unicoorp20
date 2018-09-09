$(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 60) {
      $('#logo-unicoorp').attr('src', '../../../assets/unicoorp/logo-unicoorp-1.png');
    }
    else if ((window.innerWidth > 991) || (window.location.pathname != '/')) {
      $('#logo-unicoorp').attr('src', '../../../assets/unicoorp/logo-unicoorp-2.png');
    }
  })
});