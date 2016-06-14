// to top right away


// Smooth Scroll


// Mobile Menu toggle

//$('.mobile-menu-btn').on('click', function (e) {
//    $('header.header-main').toggleClass("mobile-menu");
//    $('body').toggleClass("no-scroll");
//});


// Copy link to section on page

$('.js--copy-id').on('click', function (e) {
    var link = $(this).prev('.js--step-anchor');
    copyAnchor(link);
    console.log('element: ' + link)

    $(this).attr('data-tooltip', 'Copied!');

});

$(".copy").hover(
    function () {
        //$(this).attr('data-tooltip', 'Copied!');
    },
    function () {
        $(this).attr('data-tooltip', 'Click to copy direct link.');
    }
);

function copyAnchor(element) {
    var $temp = $("<input>");
    $("body").append($temp);

    $temp.val(window.location.href.split('#')[0] + '#' + $(element).attr("id")).select();
    document.execCommand("copy");
    $temp.remove();
    console.log(window.location.href.split('#')[0] + $(element).attr("id"));
}


var array = [];


function smoothScrollToAnchor(element) {


    element.click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                window.history.pushState(null, null, target.selector); // update the url to match the hash clicked

                //animate
                $('html, body').animate({
                    scrollTop: target.offset().top - 210
                }, 500);
                return false;
            }
        }
    });

}

function getHeaderTextAndAnchor(element) {

    element.each(function (i, e) {

        var item = $(e);
        var itemText = item.text();

        var hash = itemText.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').replace(/^-+|-+$/g, '').toLowerCase();

        item.attr("id", hash);

        array.push(itemText);

    });

    console.log('working');
}

function populateSidebarList() {
    $(".--sidebar-list").html(array.map(function (value) {
        var hash = value.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').replace(/^-+|-+$/g, '').toLowerCase();
        return ('<li class="--sidebar-item"><a href="#' + hash + '" class="js--sidebar-anchor-link">' + value.replace(/[^a-z0-9\s\.:]/gi, '') + '</a></li>');
    }).join(""));
}

function removeEmptyElement(element) {
    element.filter(function () {
        return $.trim(this.innerHTML) === "";
    }).remove();
}

function sideBarInit() {
    getHeaderTextAndAnchor($('.step--title-text'));

    populateSidebarList();

}

function checkIfHash() {
    if (window.location.hash) {

        // smooth scroll to the anchor id
        $('html, body').animate({
            scrollTop: ($(window.location.hash).offset().top - 210) + 'px'
        }, 500, 'swing');
    }
}

//init


// Init
$(document).ready(function () {

    removeEmptyElement($('p'));


    sideBarInit();

    checkIfHash();

    smoothScrollToAnchor( $('a[href*="#"]:not([href="#"])') );



    $('.toggle-sidebar').on('click', function (e) {
        $('.--sidebar-container').toggleClass("show");
        $('.toggle-sidebar').toggleClass("on");

    });

    $('.--sidebar-container').not('.toggle-sidebar').on('click', function (e) {
        $('.--sidebar-container').removeClass("show");
        $('.toggle-sidebar').removeClass("on");
        //console.log('clicked');
    });




});