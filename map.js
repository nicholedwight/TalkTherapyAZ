// Initialize and add the map
function initMap() {
    const TalkTherapyAZ = { lat: 33.5479981, lng: -112.0510452 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: TalkTherapyAZ,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: TalkTherapyAZ,
        map: map,
    });
}