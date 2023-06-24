


$(document).ready(function () {
 console.log("Ready!");

//Display current Day //
 var today = dayjs();
 $('#currentDay').text(today.format('dddd, MMMM D, YYYY h:mm A'));

 // time block is color-coded to indicate whether it is in the past ,present ,future//
  var currentHour = dayjs().hour()

   $(".time-block").each(function() {
    var timeBlock = parseInt($(this).attr("id").split("-")[1]);

    if (currentHour === timeBlock) {
      $(this).addClass('present');

    } else if (currentHour < timeBlock) {
      $(this).removeClass("present");
      $(this).addClass("future");

    } else{
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

  //TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
    $(".saveBtn").click(function (event) {

        var value = $(this).siblings(".time-block").val();
        var time = $(this).parent().attr("id").split("-")[1];
        localStorage.setItem(time,value);
    });

   //Retrieve data from local storage //
   $("#hour-09 .time-block").val(localStorage.getItem("09"));
   $("#hour-10 .time-block").val(localStorage.getItem("10"));
   $("#hour-11 .time-block").val(localStorage.getItem("11"));
   $("#hour-12 .time-block").val(localStorage.getItem("12"));
   $("#hour-13 .time-block").val(localStorage.getItem("13"));
   $("#hour-14 .time-block").val(localStorage.getItem("14"));
   $("#hour-15 .time-block").val(localStorage.getItem("15"));
   $("#hour-16 .time-block").val(localStorage.getItem("16"));
   $("#hour-17 .time-block").val(localStorage.getItem("17"));


    //Clear button function for clearing content and local storage
     $("#clearFieldsBtn").click(function(event) {
        event.preventDefault;
        $("textArea").val("");
        localStorage.clear();
    });
  
});



