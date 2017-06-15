var wins = 0;
var losses = 0;

var math = 0;

/**Random Number**/
var number = Math.floor((Math.random() * 100) + 19);

/**Random Crystal Power**/
var crystal1 = Math.floor((Math.random() * 12) + 1);
var crystal2 = Math.floor((Math.random() * 12) + 1);
var crystal3 = Math.floor((Math.random() * 12) + 1);
var crystal4 = Math.floor((Math.random() * 12) + 1);

var configmath = function() {
    $('#wins').empty();
    $('#wins').append(wins);
    $('#losses').empty();
    $('#losses').append(losses);
    $('.math').empty();
    $('.math').append(math);

}

var reset = function() {
    math = 0;
    number = Math.floor((Math.random() * 100) + 19);

    $('.number').empty();
    $('.number').append(number);

    crystal1 = Math.floor((Math.random() * 12) + 1);
    crystal2 = Math.floor((Math.random() * 12) + 1);
    crystal3 = Math.floor((Math.random() * 12) + 1);
    crystal4 = Math.floor((Math.random() * 12) + 1);
    configmath();
}

var config = function() {
    if (math == number) {
        wins = wins + 1;
        reset();
    } else if (math > number) {
        losses = losses + 1;
        reset();
    } else {
        configmath();
    }
}

$('#playerScore').html(math);
$('#targetNumber').html(number);

$(document).ready(function() {
    $('#crystal1').click(function() {
        math = math + crystal2;
        config();
        
    })
    $('#crystal2').click(function() {
        math = math + crystal1;
        config();
        

    })
    $('#crystal3').click(function() {
        math = math + crystal3;
        config();
        
    })
    $('#crystal4').click(function() {
        math = math + crystal4;
        config();
        
    })
});
