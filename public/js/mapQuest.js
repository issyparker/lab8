function initMap() {
	L.mapquest.key = 'na0uOwCB3iiw0oBR2pCrhaCGQ0koQBxm';

	var map = L.mapquest.map('map', {
  		center: [32.88, -117.236],
  		layers: L.mapquest.tileLayer('map'),
  		zoom: 12,
  		zoomControl: false
	});

	//add UCSD marker to map
	L.marker([32.88, -117.236]).addTo(map);
}