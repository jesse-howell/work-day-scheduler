// added timeBlocks variable
  var timeBlocks = $(".container-lg px-5");

// added click listener
$(".saveBtn").on("click", function saveButton () {
  console.log($(this).prev());
  var textContent = ($(this).prev().val());
  var parentID = ($(this).parent().attr("id"));
  localStorage.setItem(parentID, textContent);
  console.log(parentID, textContent);
});

// added time of day function
  function timeOfDay() { 
    var currentHour = dayjs().hour()  
    
    for(i = 9; i < 18; i++) {
      var timeBlocks = $("#hour-" + i)
      console.log(timeBlocks);
      if (currentHour > i) {
        timeBlocks.addClass("past");
      } else if (currentHour < i) {
        timeBlocks.addClass("future");
      } else if (currentHour === i) {
        timeBlocks.addClass("present");
      }
      var textContent = localStorage.getItem("hour-" + i);
      timeBlocks.find(".description").text(textContent);
    };
  };
  timeOfDay();

  // added current date
  function updateCurrentDate() { 
  var currentDate = dayjs().format('ddd, MMM D, YYYY');
  $('#currentDay').text(currentDate);
  setInterval((updateCurrentDate, 1000));

  }
  updateCurrentDate(); 
