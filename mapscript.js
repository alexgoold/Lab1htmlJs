function initMap() {
  const pizzaPlace = { lat: 57.6570496, lng: 12.0274267 };

  const map = new google.maps.Map(document.getElementById("mapPlacement"), {
    zoom: 14,
    center: pizzaPlace,
  });
  const marker = new google.maps.Marker({
    position: pizzaPlace,
    map: map,
  });
}
const shoppingCart = [];
document.getElementById("cartNumber").innerText = JSON.parse(
  localStorage.getItem("cart")
).length;
try {
  window.initMap = initMap();
} catch (error) {}
