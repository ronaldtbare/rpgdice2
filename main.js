$( document ).ready(function() {
    console.log( "ready!" );

    // function to roll die
    function roll_It(dieSide) {
        var dieNum = Math.floor(Math.random() * dieSide) + 1;
        $('.yourRoll').text(dieNum);
        return dieNum;
    }

    $("#rollbutton").on("click", function () {
        event.preventDefault();
        let dieSide = $('input[name=dietype]:checked').val();

        console.log(dieSide);

        roll_It(dieSide);

    });

    
});
