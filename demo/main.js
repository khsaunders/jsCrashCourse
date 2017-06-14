console.log ('this is connected!');

//thanks to Tim Whittaker for use of his example

// Grab the inputs
var input1 = document.querySelector('#num_one');
var input2 = document.querySelector('#num_two');

// grab the calculate button
var calcBtn = document.querySelector('#calculateBtn');

// grab the answer field
var answerField = document.querySelector('#answer');

// Value Holder
var value1, value2;

// Calculate the value of the Input Fields
function calculate () {
  value1 = input1.value;
  value2 = input2.value;

  worstDay();

  answerField.innerHTML = Number(value1) + Number(value2);
}

// Worst Day Funny
function worstDay(){
  if (value1 == '13' || value2 == '13'){
    document.querySelector('.container').innerHTML = '<img src="https://s-media-cache-ak0.pinimg.com/originals/e9/a7/f0/e9a7f06903e2157da0d7d05eda321192.jpg" height="300px">';
  }
}

//let's step it up a notch. what if we wanted to change the color of an element at random?

var colors = ['#BD1414', '#145FBD', '#14BD22', '#FAF323', '#FA8023'];
var colorBtn = document.getElementById('randomize');
var calcContainer = document.getElementById('container');

colorBtn.addEventListener('click', function randomize_color(){
    calcContainer.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

});

// Add a "watcher" to our button
calcBtn.addEventListener('click', calculate);
