import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  map: any;
  directionsService: any;
  directionsRenderer: any;
  userData = JSON.parse(localStorage.getItem('userDetails')||'');
  ratingsData = [{ name: 'Rating', data: [75, 60, 50, 90, 80] }];
  ratingsChartOptions = {
    chart: { type: 'bar', height: 350 },
    xaxis: { categories: ['Very Bad', 'Bad', 'Neutral', 'Good', 'Very Good'] },
    dataLabels: { enabled: true }
  };

  rideTimeData = [{ name: 'Average Ride Time', data: [45, 32, 25, 70] }];
  rideTimeChartOptions = {
    chart: { type: 'line', height: 350 },
    dataLabels: { enabled: true }
  };

  barChartData = [{ name: 'Registered Users', data: [100, 200, 300] }];
  barChartOptions = {
    chart: { type: 'bar', height: 350 },
    dataLabels: { enabled: true },
    xaxis: { categories: ['Jan', 'Feb', 'Mar'] }
  };

  cancellationData = [{ name: 'Cancellations', data: [10, 20, 15] }];
  cancellationChartOptions = {
    chart: { type: 'bar', height: 350 },
    dataLabels: { enabled: true },
    xaxis: { categories: ['Jan', 'Feb', 'Mar'] }
  };

  noRidesData = [{ name: 'Users Without Rides', data: [50, 30, 20] }];
  noRidesChartOptions = {
    chart: { type: 'bar', height: 350 },
    dataLabels: { enabled: true },
    xaxis: { categories: ['Jan', 'Feb', 'Mar'] }
  };

  ongoingRidesData = [{ name: 'Ongoing Rides', data: [5, 10, 8] }];
  ongoingRidesChartOptions = {
    chart: { type: 'bar', height: 350 },
    dataLabels: { enabled: true },
    xaxis: { categories: ['Jan', 'Feb', 'Mar'] }
  };


  constructor(private router: Router){}


  ngOnInit(): void {
    this.initMap();
    
  }

  navigateToCreateRide() {
    this.router.navigate(['/app/createride']);
  }

  navigateToRunningRequest() {
    this.router.navigate(['/app/runningrequest'] );
  }

  initMap() {
    // Check if the browser supports Geolocation
    if (navigator.geolocation) {
      // Get the current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
  
          this.map = new google.maps.Map(
            document.getElementById("map") as HTMLElement,
            {
              zoom: 12,
              center: userLocation, 
            }
          );
  
          const marker = new google.maps.Marker({
            position: userLocation,
            map: this.map,
            title: "Your Current Location",
            icon: {
              url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png", 
            },
          });
        },
        (error) => {
          console.error("Error fetching the location: ", error);
          alert("Error: Unable to fetch your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }
  
}
