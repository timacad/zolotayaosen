// === Сценарии ===
function showScenario(num) {
  document.getElementById("map").src = "images/map" + num + ".png";
  document.getElementById("scenario-image").src = "images/scenario" + num + ".png";
}

// === Меню ===
const menuModal = document.getElementById("menuModal");
document.getElementById("menuBtn").onclick = () => menuModal.style.display = "block";
function closeMenu() { menuModal.style.display = "none"; }

// === Атлас ===
const atlasModal = document.getElementById("atlasModal");
const atlasImage = document.getElementById("atlasImage");
let atlasIndex = 1;
let atlasTimer;

document.getElementById("atlasBtn").onclick = () => {
  atlasModal.style.display = "block";
  startAtlas();
};

function closeAtlas() {
  atlasModal.style.display = "none";
  clearInterval(atlasTimer);
}

function showAtlas(index) {
  atlasImage.src = "images/atlas" + index + ".png";
}

function nextAtlas() {
  atlasIndex = atlasIndex % 20 + 1;
  showAtlas(atlasIndex);
}

function prevAtlas() {
  atlasIndex = (atlasIndex - 2 + 20) % 20 + 1;
  showAtlas(atlasIndex);
}

function startAtlas() {
  atlasIndex = 1;
  showAtlas(atlasIndex);
  atlasTimer = setInterval(nextAtlas, 15000);
}