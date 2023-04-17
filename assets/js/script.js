// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. 

var today = dayjs();
var timeDisplayEl = $('#currentTime');
var currentHour = dayjs().hour();

// TODO: Add code to display the current date in the header of the page.
function displayTime() {
  var rightNow = dayjs().format('dddd, MMMM DD [at] hh:mm:ss a');
  $('#currentDay').text(rightNow);
}

  /* TODO: Add a listener for click events on the save button. This code should
  use the id in the containing time-block as a key to save the user input in
  local storage. HINT: What does `this` reference in the click listener
  function? How can DOM traversal be used to get the "hour-x" id of the
  time-block containing the button that was clicked? How might the id be
  useful when saving the description in local storage? */
$('.saveBtn').on('click', function(){
  var userInput = $(this).siblings('.description').val();
  var timeId = $(this).parent().attr('id');
  localStorage.setItem(timeId, userInput);
  $('h3').removeClass('hidden');
});




  // var currentHour = dayjs().hour();
  // console.log(currentHour);
  // console.log(typeof currentHour);
  // var timeBlock = $('.time-block').children('div');
  // console.log(timeBlock);
  // console.log (typeof timeBlock);
  // console.log(timeBlock[0]);
  
  // var hourIndex = 0
  // var scheduleHour = $('#hour-10')[hourIndex].attributes.value.textContent;
  // console.log(scheduleHour);
  // console.log(typeof scheduleHour);



  /* Use a for loop to go through all of the time block hours and add remove
  classes accordingly. This loop should run and compare each hour so that the
  colors update when the current hour changes. */

// for (var i = 0; i < timeBlock.length; i++) {
//   if (currentHour = scheduleHour ) {
//     console.log('currentHour matches scheduleHour');
//     $('.time-block').addClass('present');
//     $('.time-block').removeClass('past')
//     $('.time-block').removeClass('future')
//   } else if (currentHour < scheduleHour) {
//     $('.time-block').addClass('past')
//     $('.time-block').removeClass('present')
//     $('.time-block').removeClass('present')  
//   } else {
//     $('.time-block').addClass('future')
//   }
//   hourIndex++
// }

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
// });


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

/* This function works so that the Current Hour we retrieved from DayJS is compared to
the number inside the hour-x ID, that is retrieved buy using the parseInt method and change
the color of each time block accordingly. This function is then run every second with a setInterval*/
function hourlyUpdate () {

var hourComparison = dayjs().hour();

$('.time-block').each(function () {
  console.log('Running');
  var blockHour = parseInt ($(this).attr('id').split('-')[1])
  if (blockHour<hourComparison) {
    $(this).addClass('past');
  } else if (blockHour===hourComparison) {
    $(this).removeClass('past');
    $(this).addClass('present');
  } else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
  }
})

}

// This part of the code retrieves the data from the local storage so that when the user comes back, he can look at the saved events for each hour.
$('#hour-8 .description').val(localStorage.getItem('hour-8'))
$('#hour-9 .description').val(localStorage.getItem('hour-9'))
$('#hour-10 .description').val(localStorage.getItem('hour-10'))
$('#hour-11 .description').val(localStorage.getItem('hour-11'))
$('#hour-12 .description').val(localStorage.getItem('hour-12'))
$('#hour-13 .description').val(localStorage.getItem('hour-13'))
$('#hour-14 .description').val(localStorage.getItem('hour-14'))
$('#hour-15 .description').val(localStorage.getItem('hour-15'))
$('#hour-16 .description').val(localStorage.getItem('hour-16'))
$('#hour-17 .description').val(localStorage.getItem('hour-17'))
$('#hour-18 .description').val(localStorage.getItem('hour-18'))

  hourlyUpdate();
  displayTime();

// Interval to update every second the current hour that dayJS retrieves.
  setInterval(displayTime, 1000);

// Interval to check the TimeBlock hour vs the DayJS current hour. Run Every Minute
  setInterval(hourlyUpdate, 60000);