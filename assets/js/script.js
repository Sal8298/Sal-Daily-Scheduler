console.log('Connected');
//Global Vars
var userData;
var hour;

// Timeblocks
var nineAm = $('#9am');
var tenAm = $('#10am');
var elevenAm = $('#11am');
var twelvePm = $('#12pm');
var onePm = $('#1pm');
var twoPm = $('#2pm');
var threePm = $('#3pm');
var fourPm = $('#4pm');
var fivePm = $('#5pm');
var sixPm = $('#6pm');
var sevenPm = $('#7pm');

//DayJs
var currentHour = dayjs().hour();
var currentTimeDisplay = $('#time-display');

function displayTime() {
    var dateFormat = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentTimeDisplay.text(dateFormat);
};

$("#clearPlanner").on("click", function () {
    localStorage.clear();
})

function colorCoordination() {

    $(".description").each(function () {
        var currentTime = parseInt($(this).attr("id"));
        currentHour = parseInt(currentHour);
        console.log(currentTime);
        console.log(currentHour);
        if (currentHour > currentTime) {
            $(this).addClass("past");
        } else if (currentHour < currentTime) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
}

displayTime();
setInterval(displayTime, 1000);
colorCoordination();
console.log('Connected');