$(document).ready(function () {
    $('#myList li:lt(3)').show();
    var items =  100;  
    var shown =  3;
    $('#loadMore').click(function () {
        shown = $('#myList li:visible').size()+3;
        if(shown< items) {$('#myList li:lt('+shown+')').fadeIn();}
        else {$('#myList li:lt('+items+')').fadeIn();
             $('#loadMore').hide();
             }
    });
});
