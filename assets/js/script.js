// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function wrapper() {
  /* TODO: Add a listener for click events on the save button. This code should
  use the id in the containing time-block as a key to save the user input in
  local storage. HINT: What does `this` reference in the click listener
  function? How can DOM traversal be used to get the "hour-x" id of the
  time-block containing the button that was clicked? How might the id be
  useful when saving the description in local storage? */
  var clickBtn = $('.saveBtn');
clickBtn.on('click', function () {
  console.log('You clicked a button!');
  // code to store the event that the user wrote onto the local storage.
});

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var currentHour = dayjs().hour();
  var timeBlock = $('.time-block').children('div');
  console.log(timeBlock);
  console.log (typeof timeBlock);
  console.log(timeBlock[0]);
  
  var hourSchedule = 0
  var scheduleHour = $('#hour-10')[hourSchedule].attributes.value.textContent;
  console.log(scheduleHour);
  console.log(typeof scheduleHour);
  console.log(currentHour);
  console.log(typeof currentHour);

  // console.log(scheduleHour);
  // console.log(typeof scheduleHour);

  /* Use a for loop to go through all of the time block hours and add remove
  classes accordingly. This loop should run and compare each hour so that the
  colors update when the current hour changes. */

for (var i = 0; i < timeBlock.length; i++) {
  if (currentHour = scheduleHour ) {
    console.log('currentHour matches scheduleHour');
    $('.time-block').addClass('present');
    $('.time-block').removeClass('past')
    $('.time-block').removeClass('future')
  } else if (currentHour < scheduleHour) {
    $('#hour-10').addClass('past')
    $('#hour-10').removeClass('present')
    $('#hour-10').removeClass('present')  
  } else {
    $('#hour-10').addClass('future')
  }
  hourSchedule++
}

  // if (currentHour = scheduleHour ) {
  //   console.log('currentHour matches scheduleHour');
  //   $('#hour-10').addClass('present');
  //   $('#hour-10').removeClass('past')
  //   $('#hour-10').removeClass('future')
  // } else if (currentHour < scheduleHour) {
  //   $('#hour-10').addClass('past')
  //   $('#hour-10').removeClass('present')
  //   $('#hour-10').removeClass('present')  
  // } else {
  //   $('#hour-10').addClass('future')
  // }

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //






  
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM DD'));
});


// $('#btn').on('click', console.log('You clicked a button!'));
