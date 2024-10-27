function showInteraction() {
    document.getElementById("interactiveSection").classList.remove("hidden");
    document.getElementById("acceptButton").classList.add("hidden");
}

function sendVirtualHug() {
    document.getElementById("responseSection").classList.remove("hidden");
    alert("Virtual Hug Sent! 🤗💖");
}

function startMovie() {
    alert("Let's start the movie and get cozy! 🍿🎬");
    window.location.href = 'https://www.netflix.com';
}
