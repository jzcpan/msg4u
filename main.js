//* changing mochi-hi to mochi-happy
function changeMochiWave() {
  mochiWave = document.getElementById('mochi-hi');
  mochiWave.src = "images/mochi-the-maltese/mochi-happy.gif";
  mochiWave.alt = "mochi waving back";
  mochiWave.title = "look how happy he is :)";
}

//* undo the change from mochi-happy to mochi-hi
function undoMochiWave() {
  resetWave = document.getElementById('mochi-hi');
  resetWave.src = "images/mochi-the-maltese/mochi-hi.gif";
}

 //* changing mochi-depressed to mochi-hug
 function getHug() {
  mochiHug = document.getElementById('mochi-depressed');
  mochiHug.src = "images/mochi-the-maltese/mochi-hug.gif";
  mochiHug.alt = "mochi giving a virtual hug"
  mochiHug.title = "feels much better, right?"
 }

 //* changing mochi-gif to mochi-jiayou for support
 function getJiayou() {
  var mochiDepressed = document.getElementById('mochi-depressed');
  var mochiHug = document.getElementById('mochi-hug');
  
  var currentMochi = mochiDepressed.style.display !== 'none' ? mochiDepressed : mochiHug;

  currentMochi.src = "images/mochi-the-maltese/mochi-jiayou.gif";
  currentMochi.alt = "mochi cheering you on";
  currentMochi.title = "'you can do it!'";
}

//* reset encourage gifs
function resetEncourage() {
  var mochiDepressed = document.getElementById('mochi-depressed');
  var mochiHug = document.getElementById('mochi-hug');
  var mochiJiayou = document.getElementById('mochi-jiayou');

  var currentMochi = null;

  if (mochiDepressed.style.display !== 'none') {
    currentMochi = mochiDepressed;
  } else if (mochiHug.style.display !== 'none') {
    currentMochi = mochiHug;
  } else if (mochiJiayou.style.display !== 'none') {
    currentMochi = mochiJiayou;
  }

  if (currentMochi !== null) {
    currentMochi.src = "images/mochi-the-maltese/mochi-depressed.gif";
    currentMochi.alt = "mochi slouching down and feeling depressed";
    currentMochi.title = "feelin' a bit under the weather :(";
  }
}

//* clicked yes
function clickYes() {
  mochiSpotlight = document.getElementById('mochi-lonely');
  mochiSpotlight.src = "images/mochi-the-maltese/mochi-spotlight.gif";
  mochiSpotlight.alt = "mochi dancing in the spotlight";
  mochiSpotlight.title = "woohoo let's goooo";
}

document.getElementById('yesButton').addEventListener('click', clickYes);

//* clicked no
function clickNo() {
    mochiCrying = document.getElementById('mochi-lonely');
    mochiCrying.src = "images/mochi-the-maltese/mochi-crying.gif";
    mochiCrying.alt = "mochi crying and sobbing";
    mochiCrying.title = "sad";
  }
  
  document.getElementById('noButton').addEventListener('click', clickNo);

//* moving the no button when hovered
var noButton = document.getElementById('noButton');

// Add event listener for hover
noButton.addEventListener('mouseover', moveNoButton);
// Get the "No" button element
var noButton = document.getElementById('noButton');

// Define the boundaries for movement
var movementBoundaries = {
  minX: 0,
  minY: 0,
  maxX: window.innerWidth - noButton.clientWidth,
  maxY: window.innerHeight - noButton.clientHeight,
};

// Add event listener for hover
noButton.addEventListener('mouseover', moveNoButton);

// Get the "No" button element
var noButton = document.getElementById('noButton');

// Define the boundaries for movement
var movementBoundaries = {
  minX: 0,
  minY: 0,
  maxX: window.innerWidth - noButton.clientWidth,
  maxY: window.innerHeight - noButton.clientHeight,
};

// Add event listener for hover
noButton.addEventListener('mouseover', moveNoButton);

// Get the "No" button element
var noButton = document.getElementById('noButton');

// Define the boundaries for movement
var movementBoundaries = {
  minX: 0,
  minY: 0,
  maxX: window.innerWidth - noButton.clientWidth,
  maxY: window.innerHeight - noButton.clientHeight,
};

// Add event listener for hover
noButton.addEventListener('mouseover', moveNoButton);

function moveNoButton() {
  // Calculate random positions within the defined boundaries
  var randomX = Math.floor(Math.random() * (movementBoundaries.maxX - movementBoundaries.minX + 1)) + movementBoundaries.minX;
  var randomY = Math.floor(Math.random() * (movementBoundaries.maxY - movementBoundaries.minY + 1)) + movementBoundaries.minY;

  // Apply random positions
  noButton.style.position = 'absolute';
  noButton.style.left = randomX + 'px';
  noButton.style.top = randomY + 'px';
}

function unwrapGift() {
  snowman = document.getElementById('giftbox');
  snowman.src = "images/seasonal/snowman.gif";
  snowman.alt = "a cute little snowman";
  snowman.title = "it's a cute snowman! :p";
}
