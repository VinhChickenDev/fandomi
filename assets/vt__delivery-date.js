$( document ).ready(function() {
    let deliver_to_country_selected = $('.js-deliver-to-country').val();

    setTimeout(() => {
        let timeline_delivered_selected = $(`.modal-shipping[data-name=${deliver_to_country_selected}] .timeline-delivered`).text();
        $('.js-date-time').data('name', deliver_to_country_selected);
        $('.js-date-time').attr('data-name', deliver_to_country_selected);
        $('.js-date-time').text(timeline_delivered_selected);
    }, "2500");
    $('.js-deliver-to-country').on('change', function(){
        deliver_to_country_selected = $(this).val();
        timeline_delivered_selected = $(`.modal-shipping[data-name=${deliver_to_country_selected}] .timeline-delivered`).text();
        $('.js-date-time').data('name', deliver_to_country_selected);
        $('.js-date-time').attr('data-name', deliver_to_country_selected);
        $('.js-date-time').text(timeline_delivered_selected);
    });

    $('.vt__delivery-date .js-date-time').hover(
        function () {
            let country_selected = $(this).data('name');
            $(`.modal-shipping[data-name=${country_selected}]`).addClass('active');
        },
        function () {
            let country_selected = $(this).data('name');
            $(`.modal-shipping[data-name=${country_selected}]`).removeClass('active');
        }
    );
})