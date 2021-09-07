// shows current date and time
var todayDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").html(todayDate);
var saveBtn =$(".saveBtn");

$(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val(); 
    var time = $(this).parent().attr("id"); 
    
    localStorage.setItem(time, text);
})

    $("#8am-hour .description").val(localStorage.getItem("8am-hour"));

    $("#9am-hour .description").val(localStorage.getItem("9am-hour"));

    $("#10am-hour .description").val(localStorage.getItem("10am-hour"));

    $("#11am-hour .description").val(localStorage.getItem("11am-hour"));

    $("#12pm-hour .description").val(localStorage.getItem("12pm-hour"));

    $("#13pm-hour .description").val(localStorage.getItem("13pm-hour"));

    $("#14pm-hour .description").val(localStorage.getItem("14pm-hour."));

    $("#15pm-hour .description").val(localStorage.getItem("15pm-hour"));

    $("#16pm-hour .description").val(localStorage.getItem("16pm-hour"));

    $("#17pm-hour .description").val(localStorage.getItem("17pm-hour"));

    plannerTracker();

