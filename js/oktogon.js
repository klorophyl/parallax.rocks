function drawOktogon(id) {
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext("2d");

    var numberOfSides = 8;
        size = 10;
        Xcenter = $(canvas).width() / 2;
        Ycenter = 100;

    ctx.beginPath();
    ctx.moveTo(Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));

    for (var i = 1; i <= numberOfSides; i += 1)
    {
        ctx.lineTo(Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
    }

    ctx.fillStyle = "black";
    ctx.fill();
}

function drawOktogon(id, color, angle) {
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext("2d");

    var x = $(canvas).width() / 2;
    var y = $(canvas).width() / 2;
    var radius = $(canvas).width() / 2;
    var sides = 8;

    var a = (Math.PI * 2) / sides;

    ctx.beginPath();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.moveTo(radius, 0);
    for (var i = 1; i < sides; i++) {
        ctx.lineTo(radius * Math.cos(a * i), radius*Math.sin(a * i));
    }
    ctx.closePath();

    ctx.fillStyle = color;
    ctx.fill();
}

function rotateOktogon(id, degree, step) {
    $('#' + id).animate({  textIndent: degree }, {
        step: function(now, fx) {
            $(this).css("transform", 'translate(-50%, -50%) rotate('+ now +'rad)');
            $(this).css("-ms-transform", 'translate(-50%, -50%) rotate('+ now +'rad)');
            $(this).css("-webkit-transform", 'translate(-50%, -50%) rotate('+ now +'rad)');
            $(this).css("-moz-transform", 'translate(-50%, -50%) rotate('+ now +'rad)');
            $(this).css("-o-transform", 'translate(-50%, -50%) rotate('+ now +'rad)');
        },
        duration: 1500
    },'swing');

    timer = setTimeout(function () {
        rotateOktogon(id, degree + step, step);
    }, 2500);
}

function animateOpacity(id, opacity) {
    $("#" + id).animate({"opacity": opacity}, 40);
}

function blink(id) {
   animateOpacity(id, "0");
    setTimeout(function() {
       animateOpacity(id, "1");
    }, Math.floor(Math.random() * 50) + 50);

    if (Math.random() > 0.4) {
        setTimeout(function() {
            blink(id);
        }, Math.floor(Math.random() * 50) + 50);
    }
}
function blinkName() {
    blink("album-name");
    timer = setTimeout(function () {
        blinkName();
    }, 2000);
}

$(window).bind("load", function() {
    // drawOktogon("oktogon-white");
    $("#oktogon-white").attr("width", 0.38 * $(window).width() + "px");
    $("#oktogon-white").attr("height", 0.38 * $(window).width() + "px");

    $("#oktogon-black").attr("width", 0.35 * $(window).width() + "px");
    $("#oktogon-black").attr("height", 0.35 * $(window).width() + "px");

    drawOktogon("oktogon-white", "white", Math.PI / 8);
    drawOktogon("oktogon-black", "black", 0);

    rotateOktogon("oktogon-black", 0, Math.PI / 8);
    rotateOktogon("oktogon-white", 0, -Math.PI / 8);
    blinkName();
});
