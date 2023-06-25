$(document).ready(function () {
  console.log("Ready!");

  //Display current Day //
  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM D, YYYY h:mm A"));

  // time block is color-coded to indicate whether it is in the past ,present ,future//
  var currentHour = dayjs().hour();

  $(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id").split("-")[1]);

    if (currentHour === timeBlock) {
      $(this).addClass("present");
    } else if (currentHour < timeBlock) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

  //TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
    alert("Appointment added");
  });

  //Retrieve data from local storage //
  $("#hour-09 .description").val(localStorage.getItem("09"));
  $("#hour-10 .description").val(localStorage.getItem("10"));
  $("#hour-11 .description").val(localStorage.getItem("11"));
  $("#hour-12 .description").val(localStorage.getItem("12"));
  $("#hour-13 .description").val(localStorage.getItem("13"));
  $("#hour-14 .description").val(localStorage.getItem("14"));
  $("#hour-15 .description").val(localStorage.getItem("15"));
  $("#hour-16 .description").val(localStorage.getItem("16"));
  $("#hour-17 .description").val(localStorage.getItem("17"));

  //Clear button function for clearing content and local storage
  $("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textArea").val("");
    localStorage.clear();
  });
});
