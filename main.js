var world = document.querySelector('#world');
var worldTwo = document.querySelector('#worldTwo');
var timelines = document.querySelector("#timelines");
var rotationAngle = 360 / (60 * 60 * 24); // 360 degrees divided by seconds in a day
var prefixes = ['webkitTransform', 'MozTransform', 'msTransform', 'OTransform', 'transform'];

function updateMap() {
    var date = new Date();
    var rotationMultiplier = (date.getUTCHours() * 60 * 60) + (date.getUTCMinutes() * 60) + date.getUTCSeconds(); //Seconds since the start of the day.
    var rotationString = (rotationAngle * rotationMultiplier) + 180;
    var rotString = 'rotate(' + rotationString + 'deg)';
    prefixes.forEach(function (el) {
        world.style[el] = rotString;
        worldTwo.style[el] = rotString;
    });
}

setInterval(function () {
    updateMap();
}, 1000);

updateMap();

function toggleTimeLines() {
    if (timelines.style["display"] === "none") {
        timelines.style["display"] = "block";
    } else {
        timelines.style["display"] = "none";
    }
}

function toggleWorldTwo() {
    if (worldTwo.style["display"] === "none") {
        worldTwo.style["display"] = "block";
    } else {
        worldTwo.style["display"] = "none";
    }
}