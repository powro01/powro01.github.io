var buttons = $('#buttons');
var navigation = $('#navigation');
var menuButton = $('#menuButton');
var contactTrigger = $('.contact-trigger');
var contact = $('#contact');
var closeContactForm = $('#closeContactForm');

menuButton.on('click', function(e) {
    e.preventDefault();
    navigation.toggleClass('open');
    buttons.toggleClass('open');
});

contactTrigger.on('click', function(e) {
    e.preventDefault();
    contact.toggleClass('open');
});

closeContactForm.on('click', function(e) {
    e.preventDefault();
    contact.removeClass('open');
});
// new Siema({
//     loop: true
// });