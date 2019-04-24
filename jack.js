
for (var i = 1; i < 5; i++) {
    (function () {
        var y = i;
        setTimeout (function() {
        console.log(i);}, i * 500);
    })()
}