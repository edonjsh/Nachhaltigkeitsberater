

function initialize() {
  var first = [48.469371, 7.941855]; // Seniorenbüro OG
  var second = [48.46861647975147, 7.944527441111016]; // Museum im Ritterhaus.
  var third = [48.465835578836256, 7.9457722]; //Stadtteil- und Familienzentrum Innenstadt
  var fourth = [48.46899341114651, 7.95534823863845]; //Kulturbüro Offenburg
  var fifth = [48.47852719913315, 7.9384001944902245  ]; // Stadtteil- und Familienzentrum am Mühlbach 


  var map = L.map('map').setView([48.47354620917599, 7.945475441124797], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  document.getElementById("first").addEventListener("click", function () {
    map.setView(first, 19);
  });

  document.getElementById("second").addEventListener("click", function () {
    map.setView(second, 19);

  });

  document.getElementById("third").addEventListener("click", function () {
    map.setView(third, 19);

  });

  document.getElementById("fourth").addEventListener("click", function () {
    map.setView(fourth, 19);

  });

  document.getElementById("fifth").addEventListener("click", function () {
    map.setView(fifth, 19);

  });

  var marker1 = L.marker(first).addTo(map);
  var marker2 = L.marker(second).addTo(map);
  var marker3 = L.marker(third).addTo(map);
  var marker4 = L.marker(fourth).addTo(map);
  var marker5 = L.marker(fifth).addTo(map);

  marker1.bindPopup("Seniorenbüro OG").openPopup();
  marker2.bindPopup("Museum im Ritterhaus.").openPopup();
  marker3.bindPopup("Stadtteil- und Familienzentrum Innenstadt").openPopup();
  marker4.bindPopup("Kulturbüro Offenburg").openPopup();
  marker5.bindPopup("Stadtteil- und Familienzentrum am Mühlbach ").openPopup();

}

