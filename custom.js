
$( document ).ready(function() {
    console.log( "document loaded" );

startgame();
//addactiveclass();
});



function startgame (){
    start = $('.start-game');
    start.click(function(){
        console.log("Start game");
        start.toggleClass('pause');
        //start.toggleText('Pause');
        addactiveclass();
    });
}

function addactiveclass (){
    circle = $('.circle');
    console.log(Math.floor(Math.random()*4));

   num = Math.floor(Math.random()*4)

    if (num == 0) {

    } else if (num == 1) {

        circle.toggleClass("active");
    } else if (num == 2) {

    } else if (num == 3) {

    }
    $(".circle:eq(" + Math.floor(Math.random()*4) + ")").trigger('click');
}


