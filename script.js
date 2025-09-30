// === Сценарии ===
function showScenario(num) {
  const img = document.getElementById("scenario-image");
  const txt = document.getElementById("scenario-text");

  if (num === 4) {
    img.style.display = "none";        // скрываем картинку
    txt.style.display = "block";       // показываем текст
    txt.innerHTML = `
      <h3>Сценарий 4</h3>
      <p>Развитие международных связей, расширение сети дистрибуции и поиск новых рынков сбыта укрепят позиции России
на международном рынке, а внедрение строгого контроля качества на всех этапах — от производства до торговли —
обеспечит высокий стандарт продукции ХПП. При этом реализация этих планов невозможна без комплексного
подхода, включающего разработку специализированных программ и использование экономических инструментов,
таких как налоговые льготы, субсидии и инвестиционные стимулы
https://belta.by/regions/view/zelenoe-zoloto-antonovichej-417729-2020/
https://profapkbrest.by/bizon-vklad-v-kachestvo-belorusskogo-piva/</p>
    `;
  } else {
    img.style.display = "block";       // показываем картинку
    txt.style.display = "none";        // скрываем текст
    img.src = "images/scenario" + num + ".png";
  }

  // Карта меняется для всех сценариев
  document.getElementById("map").src = "images/map" + num + ".png";
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
