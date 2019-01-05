$(document).ready(function() {
    layout();
    $(window).resize(layout);

    rotate($("#ring-bg"), 200, "right");
    rotate($("#title-bg"), 250, "left");
    // rotate($("#ring-mask"), 300, "right");
});

function showMoebius(duration = 500) {
    $("#moebius").show();
    $("#moebius-bg").fadeIn(duration);
    $("#ring-mask").delay(duration * 1.5).fadeIn(duration);
    $("#title-mask").delay(duration * 2).fadeIn(duration);
}

function hideMoebius(duration = 0) {
    $("#moebius").hide(duration);
    $("#moebius-bg").fadeOut(duration);
    $("#ring-mask").fadeOut(duration);
    $("#title-mask").fadeOut(duration);
}

function layout() {
    const $ringMask = $("#ring-mask");
    const $titleMask = $("#title-mask");

    const winSize = {"w": $(window).width(), "h": $(window).height()};
    const longest = Math.max(winSize.w, winSize.h - 250);
    const shortest = Math.min(winSize.w, winSize.h - 250);
    const width = Math.min(longest, shortest - 10);
    const top = (winSize.h - 308) * 0.6;

    $ringMask.width(width);
    $ringMask.height(width);
    $ringMask.css({"top": top});

    $titleMask.width(width);
    $titleMask.height(width);
    $titleMask.css({"top": top});
};

function rotate($elt, duration, orientation) {
    $elt.css({
        "-webkit-animation": `rotating-${orientation} ${duration}s linear infinite`,
        "-moz-animation": `rotating-${orientation} ${duration}s linear infinite`,
        "-ms-animation": `rotating-${orientation} ${duration}s linear infinite`,
        "-o-animation": `rotating-${orientation} ${duration}s linear infinite`,
        "animation": `rotating-${orientation} ${duration}s linear infinite`
    });
};
