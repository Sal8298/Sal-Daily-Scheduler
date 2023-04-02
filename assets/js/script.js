console.log('Connected');
//DayJs
var currentHour = dayjs().hour();
var currentTimeDisplay = $('#time-display');

function displayTime() {
    var dateFormat = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentTimeDisplay.text(dateFormat);
};

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

function readPlannerFromStorage() {
    var planner = localStorage.getItem('planner');
    if (planner) {
        planner = JSON.parse(planner);
    } else {
        planner = [];
    }
    return planner;
}

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

function printData() {
    var planner = readPlannerFromStorage();
    for (let index = 0; index < planner.length; index+=1) {
        const plan = planner[index];
        $('.description').textContent = planner[i].plan;
    }
}

$("#clearPlanner").on("click", function () {
    localStorage.clear();
})


displayTime();
setInterval(displayTime, 1000);
colorCoordination();
console.log('Connected');