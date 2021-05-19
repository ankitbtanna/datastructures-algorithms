function makeEggs(style, n) {
    var completedEggs;
    if (style !== 'boiled') {
        var crackedEggs = crackEggs(n);
        if (style !== 'scrambled') {
            completedEggs = fryEggs(crackedEggs, style);
        } else {
            var preppedEggs = whipEggs(crackedEggs);
            completedEggs = fryEggs(preppedEggs);
        }
    }
    return completedEggs;
}

function crackEggs(n) {
    getBowl();
}

function getBowl() {
    openCabinet();
}

function openCabinet() {
    return;
}

function whippEggs(eggs) {
    getWhipper();
}

function getWhipper() {
    return;
}

makeEggs('scrambled', 3);