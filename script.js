document.addEventListener("DOMContentLoaded", function () {
	// Function to update the time
	function updateTime() {
		const currentDate = new Date();
		const currentDay = daysOfWeek[currentDate.getUTCDay()];

		const utcHours = currentDate.getUTCHours();
		const utcMinutes = currentDate.getUTCMinutes();
		const utcSeconds = currentDate.getUTCSeconds();
		const formattedUTCTime = `${utcHours}:${utcMinutes}:${utcSeconds}`;

		document.getElementById(
			"currentDayOfTheWeek"
		).textContent = `Current Day: ${currentDay}`;
		document.getElementById(
			"currentUTCTime"
		).textContent = `Current UTC Time: ${formattedUTCTime}`;
	}

	const daysOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	// Initial call to update the time
	updateTime();

	// Update the time every second
	setInterval(updateTime, 1000);
});
