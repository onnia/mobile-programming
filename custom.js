
$( document ).ready(function() {
    console.log( "document loaded" );



// startgame();
//addactiveclass();
    hitabutton();
    updatecounter();
    time_spent();
});



function startgame (){
    start = $('.start-game');
    start.click(function(e){
        e.preventDefault();
        console.log("Start game");
        start.toggleClass('pause');
        //start.toggleText('Pause');
        timer();
        addactiveclass();

    });
}

function addactiveclass (time){
   circle = $('.circle');
   num = (Math.floor(Math.random()*4))+1;


    $('.circle:nth-child('+ num +')').toggleClass("active");

    if (num == 1) {
        buttonid = green
    } else if (num == 2) {
        buttonid = orange
    } else if (num == 3) {
        buttonid = red
    } else if (num == 4) {
        buttonid = yellow
    }

    //console.log(buttonid);

    hitabutton();

}

function hitabutton(){
    circle = $('.active');

    if ( ( ".active" ) ) {

    }
    circle.click(function(e){
        e.preventDefault();

        var clickElement = e.target;  // get the dom element clicked.
        var elementClassName = e.target.className;  // get the classname of the element clicked
        var theClass = this.className;  // "this" is the element clicked
        //console.log( elementClassName );
        //console.log( clickElement );
        circle.removeClass('active');
        addactiveclass();
    });

}

function timer(){
    setInterval(addactiveclass(), 4000);

   // console.log(speedup());
}


function speedup(){
    setInterval(function(){
    orginaltime = 4000;
    },10000)

    orginaltime = 4000;
   // console.log(orginaltime);
    //return orginaltime;
}

function updatecounter(){
  //  var elementClassName = e.target.className;
  //  console.log(elementClassName);

    $('.active').click(function() {
       // .preventDefault();
        $('#countert').html(function(i, val) { return val*1+1 });
    });
}

function time_spent(){
    $('#timespent').runner('start');
}