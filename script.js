$(document).ready(function () {
    // Accordion functionality
    $('.accordion-header').click(function () {
        $(this).toggleClass('active').next('.accordion-content').slideToggle();
        $('.accordion-content').not($(this).next('.accordion-content')).slideUp();
        $('.accordion-header').not(this).removeClass('active');
    });

    // Tabbed content functionality
    $('.tab-header').click(function () {
        var index = $(this).index();
        $('.tab-header').removeClass('active');
        $(this).addClass('active');
        $('.tab-content .tab-pane').removeClass('active');
        $('.tab-content .tab-pane:eq(' + index + ')').addClass('active');
    });
});
