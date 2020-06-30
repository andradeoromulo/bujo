// Deixando o scroll suave para as seções do site
$('.nav-link').click(function(event) {
   event.preventDefault();
   let id = $(this).attr('href');
   let target = $(id).offset().top;
   let navHeight = $('.navbar-brand').innerHeight();

   $('html, body').animate({
        scrollTop: target - navHeight
   }, 500);
});