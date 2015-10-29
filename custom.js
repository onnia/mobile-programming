
$( document ).ready(function() {
    startgame();

    if (Cookies.get('topscore')){
       var score = Cookies.get('topscore');
        $('#topscore').html(score);

    } else {
        Cookies.set('topscore', '0', { expires: 365, path: '' });
    }
});

function intervalcounter() {
    /*This is the start time*/
    var counter = 1000;
    var myFunction = function () {
        clearInterval(interval);
        counter *= 0.999;
        interval = setInterval(myFunction, counter);
        $('#odometer5').html(counter);
        updateamuoutcounter();
        activebutton();
    }
    var interval = setInterval(myFunction, counter);
}

function startgame (){
    var pause = $('#pause-game');
    var start = $('#start-game');

    start.click(function(e){
        e.preventDefault();
        start.addClass('hide');
        time_spent();
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
    var loser = $('.loser');

    if (click < count){
        console.log('You lose');
        loser.show();

        if (Cookies.get('topscore') < click){
            Cookies.set('topscore', click, { expires: 365, path: '' });
            $('#score_loser').html(click);
        }
        $('#topscore_loser').html(Cookies.get('topscore'));
        $('#score_loser').html(click);
    }
    var count = null;
    var click = null;
}


function activebutton(){
    //save value to variable and create selector
    var circle = randomselect();
    var id = $(circle);
    var active = 'active';

    id.one('click touch', function () {
        id.removeClass('active');
        updateclickcounter();
    });
}

function time_spent(){
    var d = new Date();
    d.setMinutes(d.getMinutes());
    $('#timer').tinyTimer({ from: d });
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
