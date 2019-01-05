hideMoebius();
window.onload = function() {
    hideLoadingView(200);
    showMoebius();
}

function showLoadingView(duration = 200) {
    $(".loading-view").fadeIn(duration);
}

function hideLoadingView(duration = 200) {
    $(".loading-view").fadeOut(duration);
}
