var buttons = $('#buttons');
var navigation = $('#navigation');
var menuButton = $('#menuButton');

menuButton.on('click', function(e) {
    e.preventDefault();
    navigation.toggleClass('open');
    buttons.toggleClass('open');
});

// new Siema({
//     loop: true
// });