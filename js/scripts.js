$(function() {
    console.log('DOM loaded - you can have fun');
});

var carouselList = $('#carousel ul');

setInterval(changeSlide, 4000);

function changeSlide() {
    carouselList.animate({'marginLeft': -1200}, 3000, moveFirstSlide);
}; 

function moveFirstSlide() {
    var firstItem = carouselList.find('li:first');
    var lastItem = carouselList.find('li:last');
    
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
}