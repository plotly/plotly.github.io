////////////////////////////////////
//
//  Variables
//
//

var sidebar_items = [];

////////////////////////////////////
//
//  Functions
//
//

/**
 * Function to copy the id hash to clipboard
 */

function copyAnchor(element) {
    var $temp = $("<input>");
    $("body").append($temp);

    $temp.val(window.location.href.split('#')[0] + '#' + $(element).attr("id")).select();
    document.execCommand("copy");
    $temp.remove();
}

/**
 * Smooth scroll on click to anchor
 * @params element
 */
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
/**
 * Smooth scroll on page load to anchor if there is an anchor in the URL
 */
function checkIfHash() {
    if (window.location.hash) {
        $('html, body').animate({
            scrollTop: ($(window.location.hash).offset().top - 210) + 'px'
        }, 500, 'swing');
    }
}


/**
 * Pull out header text and put into array (sidebar_items)
 * @params element
 */

function getHeaderTextAndAnchor(element) {
    element.each(function (i, e) {
        var item = $(e);

        var step = {
            text: item.text(),
            id: item.attr('id')
        };
        sidebar_items.push(step);
    });
}

/**
 * Pull out header text and put into array (sidebar_items)
 * @params element
 */

function populateSidebarList() {
    $(".--sidebar-list").html(
        sidebar_items.map(function (step) {
            return ('<li class="--sidebar-item"><a href="#' + step.id + '" class="js--sidebar-anchor-link">' + step.text + '</a></li>');
        }));
}

function removeEmptyElement(element) {
    element.filter(function () {
        return $.trim(this.innerHTML) === "";
    }).remove();
}

/**
 * Do all the sidebar stuff
 */
function assembleSidebar() {
    getHeaderTextAndAnchor($('.step--title-text'));
    populateSidebarList();
}

/**
 * Handle all scrolling behavior
 */
function smoothScroll() {
    checkIfHash();
    smoothScrollToAnchor( $('a[href*="#"]:not([href="#"])') );
}






//init


// Init
$(document).ready(function () {


    removeEmptyElement($('p'));
    assembleSidebar();
    smoothScroll();


    $('.toggle-sidebar').on('click', function (e) {
        e.preventDefault();
        $('.--sidebar-container').toggleClass("show");
        $('.toggle-sidebar').toggleClass("on");

    });
    $('.--sidebar-container a').on('click', function (e) {
        $('.--sidebar-container').removeClass("show");
        $('.toggle-sidebar').removeClass("on");
    });


    $('.js--copy-id').on('click', function (e) {
        var link = $(this).prev('.js--step-anchor');
        copyAnchor(link);
        $(this).attr('data-tooltip', 'Copied!');

    });

    $(".copy").hover(
        function () {

        },
        function () {
            $(this).attr('data-tooltip', 'Click to copy direct link.');
        }
    );


    /**
     * Mobile menu toggle
     */
    $(".js-mobile-menu-button").click(function () {


        $(this).toggleClass("is-active");

        $('header.header-main').toggleClass('mobile-menu');

    });


});