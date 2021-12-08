const background = document.querySelector(".bg");
window.addEventListener("scroll", function () {
  background.style.backgroundPosition = +window.pageYOffset + "px";
});

const gameText = document.querySelector(".game-text");
const blueStroke = document.querySelector(".blue-stroke");

$(document).on("click", ".tablinks", function () {
  $(this).addClass("active-btn").siblings().removeClass("active-btn");
});

function gamePage() {
  blueStroke.style.width = "25%";
  gameText.innerHTML =
    "Boost your visibility by creating a game page that is automatically featured to thousands of media and influencers interested in your genre of game. The game page is a one stop shop for anyone interested in covering your game, requesting a review code, subscribing to updates or setting up a developer interview";
}

function mediaBoost() {
  blueStroke.style.width = "50%";
  gameText.innerHTML =
    "Reach thousands of top tier game journalists with news of your game launch or your next big update update. Indie Boost will automatically pick the right journalist based on your game genre, style and launch platform and handle all game key and interview requests for you.";
}

function influencerBoost() {
  blueStroke.style.width = "75%";
  gameText.innerHTML =
    "Indie Boost has thousands of Influencers signed up with millions of followers across a variety of game genres and platforms. Ensure that your game gets played by the right influencers on Twitch and Youtube. Automatically pick and curate the right influencers to play your game ensuring maximum tracktion is gained.";
}

function reporting() {
  blueStroke.style.width = "100%";
  gameText.innerHTML =
    "Indie Boost features the most comprehensive reports in the industry. Get live updates on all content produced, insights into video views and conversions. Measure interest in your game and account for each key distributed via the platform.";
}
