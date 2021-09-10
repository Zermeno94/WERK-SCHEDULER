$(document).ready(function() { // pulls html & css 
    // shows current date and time 
    var todayDate = moment().format('MMMM Do YYYY, h:mm:ss a'); // format pulled from moment js.
    $("#currentDay").html(todayDate); // format pulled from moment js.


    // responsive save button 
    $(".saveBtn").on("click", function() {
      var text = $(this).siblings(".description").val(); // declares text 
      var time = $(this).parent().attr("id"); // declares time 

      //local storage 
      localStorage.setItem(time, text);
    });

    //Need to do:
    // color change for past, present, future 
    // local storage not functioning. 
  
    // save date to local storage for each hour 
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
  
  });