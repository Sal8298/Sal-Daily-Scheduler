console.log('Connected');
//DayJs
var currentHour = dayjs().hour();
var currentTimeDisplay = $('#time-display');

//Display time
function displayTime() {
    var dateFormat = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentTimeDisplay.text(dateFormat);
};

// Changes textarea color depending on time of day.
function colorCoordination() {

    $(".description").each(function () {
        var plannerTime = parseInt($(this).attr("id"));
        currentHour = parseInt(currentHour);
        console.log(plannerTime);
        console.log(currentHour);
        if (currentHour > plannerTime) {
            $(this).addClass("past");
        } else if (currentHour < plannerTime) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
}

// Get from local storage.
function readPlannerFromStorage() {
    var planner = localStorage.getItem('planner');
    if (planner) {
        planner = JSON.parse(planner);
    } else {
        planner = [];
    }
    return planner;
}

// Save to local storage.
function savePlannerToStorage(planner) {
localStorage.setItem('planner', JSON.stringify(planner));
}

$('.saveBtn').on('click', function() {
    var text = $(this).siblings(".description").val().trim();
    var plannerTime = $('.hour').text();
    console.log(text);
    var newPlan = {
        id: plannerTime,
        plan: text
    }

    var planner = readPlannerFromStorage();
    planner.push(newPlan)
    savePlannerToStorage(planner)
});

// Clear local storage.
$("#clearPlanner").on("click", function () {
    localStorage.clear();
})


displayTime();
setInterval(displayTime, 1000);
colorCoordination();
console.log('Connected');