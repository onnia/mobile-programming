
$( document ).ready(function() {
    startgame();
    //addactiveclass();
    hitabutton();
    // updatecounter();
    //  timer();

});


function intervalcounter() {
    var counter = 1000;
    var myFunction = function () {
        clearInterval(interval);
        counter *= 0.999;
        interval = setInterval(myFunction, counter);
        console.log(counter);
        $('#interval').html(counter);
        updatecounter();
        hitabutton();
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
        // pause.removeClass('hide');
        start.addClass('hide');
       // console.log("Start game");
        // randomselect();
        time_spent();
        // pausegame();
        hitabutton();
        intervalcounter();
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
    //  $('.circle:nth-child('+ num +')').toggleClass("active");

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

    // Add active class to the selected id
    buttonidselector.addClass("active");

    console.log('Selected button '+ buttonidselector.selector);

    return buttonidselector.selector;
}

function hitabutton(){
    var circle = randomselect();
    //save value to variable and create selector
    var id = $(circle);
    console.log(id);
    // if active id button is clicked
    if (id.hasClass('active')) {
        id.on("click", function (e) {
            var click = true;
            e.preventDefault();
            console.log('clicked button ' + id);
            // Add new count
            updatecounter();
            // Remove Active class from siblings
            $(this).siblings().removeClass('active');
            $(this).removeClass('active');
            $(this).delay(100).queue(function () {
            });
            // Call again new button
            nextselection = randomselect();
            console.log('Next button is ' + nextselection);
        });
    }
}

function timer(){
    function timegoesby(){
        $(".button").click()
    }
    setTimeout(function() {
        timegoesby();
    }, 7000);
    hitabutton();
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
    $('#count-amount').html(function(i, val) {
           // console.log("clicked " + val);
            return (val*1)+1
        }
    );
}

function time_spent(){
    var d = new Date();
    d.setMinutes(d.getMinutes());
    $('#timer').tinyTimer({ from: d });
}
