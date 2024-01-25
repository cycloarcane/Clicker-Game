gameStateObj = {
  "heaven army": {
    angels: 0,
    lighteningBolt: 10,
    "fortress health": 1000,
  },
  "hell army": {
    demons: 0,
    fireball: 10,
    "fortress health": 1000,
  },
};

document.getElementById("clickerHell").addEventListener("click", function () {
  gameStateObj["hell army"]["demons"] += 1;
  document.getElementById("clickCountHell").textContent = gameStateObj["hell army"]["fortress health"];
});

document.getElementById("clickerHeaven").addEventListener("click", function () {
  gameStateObj["heaven army"]["angels"] += 1;
  document.getElementById("clickCountHeaven").textContent = gameStateObj["heaven army"]["fortress health"];
});

document.getElementById("lighteningBolt").addEventListner("click", function () {
  gameStateObj["heaven army"].lighteningBolt -= 5;
  document.getElementById("lighteningDamage").textContent = gameStateObj["heaven army"].lighteningBolt;
});

document.getElementById("fireBall").addEventListner("click", function () {
  gameStateObj["hell army"].fireBall -= 5;
  document.getElementById("lighteningDamage").textContent = gameStateObj["hell army"].fireBall;
});

setInterval(function () {
  gameStateObj["hell army"]["fortress health"] -= gameStateObj["heaven army"].angels + gameStateObj["heaven army"].lighteningBolt;
  gameStateObj["heaven army"]["fortress health"] -= gameStateObj["hell army"].demons + gameStateObj["hell army"].fireBall;

  document.getElementById("clickCountHell").textContent = gameStateObj["hell army"]["fortress health"];
  docuemnt.getElementById("clickCountHeaven").textContent = gameStateObj["heaven army"]["fortress health"];
})

setInterval(function () {
  gameStateObj["hell army"]["fortress health"] -=
    gameStateObj["heaven army"]["angels"];
  document.getElementById("clickCountHell").textContent =
    gameStateObj["hell army"]["fortress health"];
  gameStateObj["heaven army"]["fortress health"] -=
    gameStateObj["hell army"]["demons"];
  document.getElementById("clickCountHeaven").textContent =
    gameStateObj["heaven army"]["fortress health"];

}, 1000);
