// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function() {
$(function() {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

// added click listener
  // Step 1: Select all save buttons
var saveButtons = $('.savebtn');

// Step 2: Attach click event listener to save buttons
saveButtons.on('click', function() {
  // Step 3: Use `this` to refer to the clicked save button
  var clickedButton = $(this);

  // Step 4: Navigate to the containing time-block element
  var timeBlock = clickedButton.closest('.time-block');

  // Step 5: Extract the "hour-x" id
  var timeBlockId = timeBlock.attr("id");

  // Step 6: Save user input in local storage using the id as the key
  var userInput = timeBlock.find('.description').val();
  localStorage.setItem(timeBlockId, userInput);
  
});


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // each time block needs past, present or future applied to them. compare the
  // current hour to the id of the block. 9am will be past, 10 present and everything else future.
  function handler (event) {
    var target = $(event.target);
    if (target.is("hour-9")) {
      target.children().hide();

    }
  }
  // if the current time block has an id more than 10, it's in the future

  // the time must be logged as 24 hour

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  
  // added current date
  var currentDate = dayjs('2023-11-19').format('ddd, MMM D, YYYY');
  $('#currentDay').text(currentDate); 
  var originalDate = dayjs('2023-11-19');
  console.log(originalDate.format('2023-11-19'));




});
});