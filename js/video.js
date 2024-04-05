var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video=document.querySelector("#player1");
	video.autoplay=false;
	video.loop=false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("looping is set to " + video.loop);

});

document.getElementById("play").addEventListener("click", function() {
	video.play();
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

document.getElementById("pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.getElementById("slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate = video.playbackRate * 0.9;
    console.log("Speed is " + video.playbackRate);
});

document.getElementById("faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate = video.playbackRate / 0.9;
    console.log("Speed is " + video.playbackRate);
});

document.getElementById("skip").addEventListener("click", function() {
    console.log("Skip ahead");
    var newTime = video.currentTime + 10;
    if (newTime <= video.duration) {
        video.currentTime = newTime;
    } else {
        video.currentTime = 0;
    }
    console.log("Video current time is " + video.currentTime);
});

document.getElementById("mute").addEventListener("click", function() {
    if (video.muted) {
        video.muted = false;
        this.innerHTML = "Mute";
		console.log("Mute");
    } else {
        video.muted = true;
        this.innerHTML = "Unmute";
		console.log("Unmute");
    }
});

var slider = document.getElementById("slider");
var volume_range = document.getElementById("volume");

slider.addEventListener("input", function() {
    video.volume = slider.value / 100;
	volume_range.innerHTML = slider.value + "%";
	console.log("The current value is " + video.volume);

});

document.getElementById("vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

document.getElementById("orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});