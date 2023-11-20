// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(document).ready(function () {


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
  

  // if the current time block has an id more than 10, it's in the future

  // the time must be logged as 24 hour
// Get the current hour using Day.js in 24-hour format
// var currentHour = dayjs().format('H');

// // Loop through each time block
// $('.time-block').each(function() {
//   // Get the hour from the id of the time block
//   var blockHour = parseInt($(this).attr('id'));

//   // Compare the block hour with the current hour
//   if (blockHour < currentHour) {
//     // If the block hour is in the past, add the 'past' class
//     $(this).addClass('past');
//   } else if (blockHour == currentHour) {
//     // If the block hour is the current hour, add the 'present' class
//     $(this).addClass('present');
//   } else {
//     // If the block hour is in the future, add the 'future' class
//     $(this).addClass('future');
//   }
// });
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // Loop through each time block
// $('.time-block').each(function() {
//   // Get the id of the time block
//   var blockId = $(this).attr('id');

//   // Get the user input from localStorage using the blockId as the key
//   var userInput = localStorage.getItem(blockId);

//   // If there is a user input saved in localStorage, set the value of the textarea element
//   if (userInput) {
//     $(this).find('textarea').val(userInput);
//   }
// });
  // TODO: Add code to display the current date in the header of the page.
  
  // added current date
  $(function updateCurrentDate() { 
  var currentDate = dayjs('2023-11-20').format('ddd, MMM D, YYYY');
  $('#currentDay').text(currentDate);
  updateCurrentDate(); 
  setInterval((updateCurrentDate, 1000));

}); 
});

