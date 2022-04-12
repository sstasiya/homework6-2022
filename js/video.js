var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	video.autoplay = false;
	video.loop = false;
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
 	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = .95 * video.playbackRate;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = 1.05 * video.playbackRate;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime);
	if ((video.currentTime + 15) > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime = video.currentTime + 15;
	}
	console.log("New location " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	if (video.muted == false) {
		this.innerHTML = "Unmute"
		video.muted = true;
	}
	else {
		this.innerHTML = "Mute"
		video.muted = false;
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log(video.volume);
});


document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});