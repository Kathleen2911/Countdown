// form element
var formElement = document.getElementById("countdown-form");
var messageInputElement = document.getElementById("messageInput");
var messageOutputElement = document.getElementById("messageOutput");
messageOutputElement.style.display = "none";

// counter number
var counterElement = document.getElementById("counter");
counterElement.style.display = "none";

// countdown event
function updateCountdown(startingSeconds) {
	var time = startingSeconds;
	var eventText = document.getElementById("eventText").value;

	// show counter
	formElement.style.display = "none";
	counterElement.style.display = "block";

	var interval = setInterval(function(){
		// count to zero
		counterElement.innerHTML = time;
		time--;
		if (time <= -1) {
			clearInterval(interval);

			//display countdown message
			counterElement.style.display = "none";
			formElement.style.display = "block";

			messageInputElement.style.display = "none";
			messageOutputElement.style.display = "block";

			document.getElementById("msg").innerHTML = eventText;
		}
	}, 1000);
}
