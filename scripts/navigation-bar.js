$('.toggle-bar').on('click', function (event) {
    $('this').toggleClass('open');
    $('.navigation-bar').slideToggle('200');
})

var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

if (vw <= 1200) {
$('.navigation-bar').hide();
}

$(window).on('resize', function() {
vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

if (vw <= 1200) {
    $('.navigation-bar').hide();
}else{
    $('.navigation-bar').show();
}
});