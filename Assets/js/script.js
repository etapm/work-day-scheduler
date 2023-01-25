$(function () {
  // Add a listener for click events on the save button
  $(".saveBtn").click(function () {
    // Get the id of the time-block containing the button that was clicked
    var hourId = $(this).closest(".time-block").attr("id");
    // Get the value of the textarea in the same time-block
    var description = $(this).closest(".time-block").find(".description").val();
    // Save the description in local storage using the hourId as the key
    localStorage.setItem(hourId, description);
  });

  // Get current hour
  var currentHour = new Date().getHours();


  // Apply past, present, or future class to each time block
  $(".time-block").each(function () {
    var hour = parseInt(this.id.split("-")[1]);
    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // Get any user input that was saved in localStorage and set the values of the corresponding textarea elements
  $(".time-block").each(function () {
    var hourId = this.id;
    var savedDescription = localStorage.getItem(hourId);
    $(this).find(".description").val(savedDescription);
  });

  // Display the current date in the header of the page
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

});

