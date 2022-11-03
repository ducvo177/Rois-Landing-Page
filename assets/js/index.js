const FoodArray = [
  "The Corner Hotel",
  "Hochi Mama",
  "New Quarter",
  "Macelleria",
  "Richmond Social",
  "Future Future",
  "Waygood",
  "South of the Wall",
  "The Precinct Hotel",
  "Frédéric",
  "Richmond Club Hotel",
  "Gelato Messina",
  "Fargo and Co",
  "The Ugly Duckling",
  "Public House",
  "Salona",
  "Union House",
  "Maeve Fox",
  "Harlow",
  "Royal Saxon",
  "Prince Alfred Richmond",
];
const WellnessArray = [
  "Volt Fitness",
  "Body Fit Training",
  "F45 Training",
  "Love Athletica",
  "Universal Practice",
  "Fitness First",
  "Barkly Gardens",
];
const CafesArray = [
  "Cheeky Monkey",
  "Sable",
  "My Oh My",
  "Ms Frankie",
  "Pillar of Salt",
  "LaManna And Sons",
  "Axil Coffee Roasters",
  "Top Paddock",
];
const AmenityArray = ["Coles", "Chemist Warehouse", "Westpac"];
const food = document.getElementById("FoodBeverage"),
  wellness = document.getElementById("Wellness"),
  cafes = document.getElementById("Cafés"),
  amenity = document.getElementById("Amenity"),
  menuOpen = document.querySelector(".menuopen--icon"),
  menuClose = document.querySelector(".menuclose--icon"),
  menu = document.querySelector(".heading__menu");

// Menu Handle
menuOpen.addEventListener("click", () => {
  menu.style.animation = " growFromRight 400ms linear";
  menu.style.display = "block";
});
menuClose.addEventListener("click", () => {
  menu.style.animation = " growFromLeft 500ms linear";
  menu.style.display = "none";
});

wellness.innerHTML = `<ul class="map__ul">${WellnessArray.map((item) => {
  return `<li class="map__li">${item}</li>`;
})}`;
food.innerHTML = `<ul class="map__ul">${FoodArray.map((item) => {
  return `<li class="map__li">${item}</li>`;
})}`;
cafes.innerHTML = `<ul class="map__ul">${CafesArray.map((item) => {
  return `<li class="map__li">${item}</li>`;
})}`;
amenity.innerHTML = `<ul class="map__ul">${AmenityArray.map((item) => {
  return `<li class="map__li">${item}</li>`;
})}`;
const tabcontent = document.getElementsByClassName("map__tabcontent");
// tabcontent[0].className+="active"
function openMap(evt, mapName) {
  var i, tablinks;
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("map__tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(mapName).style.display = "block";
  evt.currentTarget.className += " active";
}

//   Map Handle
var scale = 1,
  panning = false,
  pointX = 0,
  pointY = 0,
  start = { x: 0, y: 0 },
  zoom = document.getElementById("zoom");

function setTransform() {
  zoom.style.transform =
    "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
}

zoom.onmousedown = function (e) {
  e.preventDefault();
  start = { x: e.clientX - pointX, y: e.clientY - pointY };
  panning = true;
};

zoom.onmouseup = function (e) {
  panning = false;
};

zoom.onmousemove = function (e) {
  e.preventDefault();
  if (!panning) {
    return;
  }
  pointX = e.clientX - start.x;
  pointY = e.clientY - start.y;
  setTransform();
};

zoom.onwheel = function (e) {
  e.preventDefault();
  var xs = (e.clientX - pointX) / scale,
    ys = (e.clientY - pointY) / scale,
    delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
  delta > 0 ? (scale *= 1.2) : (scale /= 1.2);
  pointX = e.clientX - xs * scale;
  pointY = e.clientY - ys * scale;

  setTransform();
};

// Slider
$(".slider").slick({
  infinite: true,
  dots: true,
  arrows: false,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
});