var world = document.querySelector('.world');
var rotationAngle = 360 / (60 * 60 * 24); // 360 degrees divided by seconds in a day
var prefixes = ['webkitTransform', 'MozTransform', 'msTransform', 'OTransform', 'transform'];

function updateMap() {
    var date = new Date();
    var rotationMultiplier = (date.getUTCHours() * 60 * 60) + (date.getUTCMinutes() * 60) + date.getUTCSeconds();
    var rotationString = (rotationAngle * rotationMultiplier) + 180;
    var rotString = 'rotate(' + rotationString + 'deg)';
    prefixes.forEach(function (el) {
        world.style[el] = rotString;
    });
    console.log('map updated at => ' + new Date());
}

setInterval(function () {
    updateMap();
}, 1000);

updateMap();