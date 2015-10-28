
$( document ).ready(function() {
    startgame();
    //addactiveclass();
    //  hitabutton();
    // updatecounter();
    //  timer();
    //activebutton();


    if (Cookies.get('topscore')){
       var score = Cookies.get('topscore');
        $('#topscore').html(score);

    } else {
        Cookies.set('topscore', '0', { expires: 365, path: '' });
    }
});


function intervalcounter() {
    /*This is the start time*/
    var counter = 3000;
    var myFunction = function () {
        clearInterval(interval);
        counter *= 0.999;
        interval = setInterval(myFunction, counter);
        $('#interval').html(counter);
        updateamuoutcounter();
        activebutton();
    }
    var interval = setInterval(myFunction, counter);
}

/* TODO:
 * Create a timer
 * check
 * Create a Start for timer
 * check
 * Create a Pause for timer
 * not check
 * When a timer starts active class is added
 * check
 * when button is clicked clicking period slows down
 *
 * Create a function that returns a click event of active button
 *
 *
 * */

function startgame (){
    var pause = $('#pause-game');
    var start = $('#start-game');

    start.click(function(e){
        e.preventDefault();
        start.addClass('hide');
        // console.log("Start game");
        time_spent();
        // pausegame();
        intervalcounter();
        activebutton();
    });
}

function pausegame(){
    var pause = $('#pause-game');
    var start = $('#start-game');
    pause.click(function(e){
        e.preventDefault();
        start.removeClass('hide')
        pause.addClass('hide');
    });
}

function randomselect (){
    var num = (Math.floor(Math.random()*4))+1;

    if (num == 1) {
        buttonid = 'green';
    } else if (num == 2) {
        buttonid = 'orange';
    } else if (num == 3) {
        buttonid = 'red';
    } else if (num == 4) {
        buttonid = 'yellow';
    }
    var buttonidselector = $('#'+buttonid+'');

    // We should not have active class if you have pressed button at a time.
    if ($(".circle").hasClass('active')){
        checkmistake();
        $(".circle").removeClass("active");
    }
    buttonidselector.addClass("active");

    return buttonidselector.selector;
}


function checkmistake(){
    var count = $('#count-amount').html();
    var click = $('#click-amount').html();

    if (click < count){
        console.log('You lose');

        Cookies.set('topscore', click, { expires: 365, path: '' });

    } else if (count == click){
        console.log('You are safe!');
    }
    var count = null;
    var click = null;
}


function activebutton(){
    //save value to variable and create selector
    var circle = randomselect();
    var id = $(circle);
    var active = 'active';

    id.one('click touchstart', function () {
        id.removeClass('active');
        updateclickcounter();
    });
}

function updateamuoutcounter(){
    $('#count-amount').html(function(i, val) {
            return (val*1)+1
        }
    );
}

function updateclickcounter(){
    $('#click-amount').html(function(i, val) {
            return (val*1)+1
        }
    );
}

function time_spent(){
    var d = new Date();
    d.setMinutes(d.getMinutes());
    $('#timer').tinyTimer({ from: d });
}
