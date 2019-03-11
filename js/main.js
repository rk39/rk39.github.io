var masivi = [4,5,2,8,1,0,7]

for ( var i = 1; i < masivi.length; i++){

    function saxeli () {
        var k = i;
        setTimeout(() => {
            console.log(k);
        }, k * 500);
    };
    saxeli();
}