$(document).ready(function () {
    $('.explorelista li:lt(3)').show();
    var items =  100;  
    var shown =  3;
    $('#exploreMore').click(function () {
        shown = $('.explorelista li:visible').size()+3;
        if(shown< items) {$('.explorelista li:lt('+shown+')').fadeIn();}
        else {$('.explorelista li:lt('+items+')').fadeIn();
             $('.exploreMore').hide();
             }
    });
});

/*
$(document).ready(function () {
    $('.explorelistb li:lt(3)').show();
    var items =  100;  
    var shown =  3;
    $('#exploreMore').click(function () {
        shown = $('.explorelistb li:visible').size()+3;
        if(shown< items) {$('.explorelistb li:lt('+shown+')').fadeIn();}
        else {$('.explorelistb li:lt('+items+')').fadeIn();
             $('.exploreMore').hide();
             }
    });
});

$(document).ready(function () {
    $('.explorelistc li:lt(3)').show();
    var items =  100;  
    var shown =  3;
    $('#exploreMore').click(function () {
        shown = $('.explorelistc li:visible').size()+3;
        if(shown< items) {$('.explorelistc li:lt('+shown+')').fadeIn();}
        else {$('.explorelistc li:lt('+items+')').fadeIn();
             $('.exploreMore').hide();
             }
    });
});

$(document).ready(function () {
    $('.explorelistd li:lt(3)').show();
    var items =  100;  
    var shown =  3;
    $('#exploreMore').click(function () {
        shown = $('.explorelistd li:visible').size()+3;
        if(shown< items) {$('.explorelistd li:lt('+shown+')').fadeIn();}
        else {$('.explorelistd li:lt('+items+')').fadeIn();
             $('.exploreMore').hide();
             }
    });
});

$(document).ready(function () {
    $('.exploreliste li:lt(3)').show();
    var items =  100;  
    var shown =  3;
    $('#exploreMore').click(function () {
        shown = $('.exploreliste li:visible').size()+3;
        if(shown< items) {$('.exploreliste li:lt('+shown+')').fadeIn();}
        else {$('.exploreliste li:lt('+items+')').fadeIn();
             $('.exploreMore').hide();
             }
    });
});

$(document).ready(function () {
    $('.explorelistf li:lt(3)').show();
    var items =  100;  
    var shown =  3;
    $('#exploreMore').click(function () {
        shown = $('.explorelistf li:visible').size()+3;
        if(shown< items) {$('.explorelistf li:lt('+shown+')').fadeIn();}
        else {$('.explorelistf li:lt('+items+')').fadeIn();
             $('.exploreMore').hide();
             }
    });
});
*/
