// Making an interface for addMarker method 
export interface MarkerPoint {
    location: {
        lat: number;
        lng: number;
    }
    // Define a method that is needed to initialize the method in CustomMap class
    makeContent() : string;
}

// Making an class for Custom Map that provides functions from class Map but access only written methods
export class CustomMap {
    private googleMap: google.maps.Map; // making property private blocks rest of the functions outside the class

    constructor(divId : string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    // Add method that generates 2 markers 
    addMarker (markerPoint: MarkerPoint) : void {
        
        // Make new Marker object and set params from classes 
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: markerPoint.location.lat,
                lng: markerPoint.location.lng
            }
        });

        // Add Listener for being clicked that uses `InfoWindow`
        marker.addListener('click', ()=> {
            const infoWindow = new google.maps.InfoWindow({
                content: markerPoint.makeContent()
            });
            infoWindow.open(this.googleMap, marker);
        });
    }
}