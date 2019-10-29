var sliderOne = document.getElementById("myRangeOne");
var outputOne = document.getElementById("rangeOneValue");
// outputOne.innerHTML = sliderOne.value;
// Display the default slider value
// Update the current slider value (each time you drag the slider handle)

sliderOne.oninput = function() {
	  outputOne.innerHTML = this.value;
}



var sliderTwo = document.getElementById("myRangeTwo");
var outputTwo = document.getElementById("rangeTwoValue");
outputTwo.innerHTML = sliderTwo.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
sliderTwo.oninput = function() {
  outputTwo.innerHTML = this.value;
}




