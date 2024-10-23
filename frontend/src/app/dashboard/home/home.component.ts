import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexGrid,
  ApexStroke
} from 'ng-apexcharts';

declare var google: any;

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData = JSON.parse(localStorage.getItem('userDetails') || '');
  
  // Chart options for each graph
  public ratingsChartOptions: Partial<ChartOptions>;
  public averageRideTimeChartOptions: Partial<ChartOptions>;
  public registeredUsersChartOptions: Partial<ChartOptions>;
  public cancellationsChartOptions: Partial<ChartOptions>;
  public usersWithoutRidesChartOptions: Partial<ChartOptions>;
  public ongoingRidesChartOptions: Partial<ChartOptions>;

  constructor(private router: Router) {
    // Initialize the charts with sample data
    this.ratingsChartOptions = this.getRatingsChartOptions();
    this.averageRideTimeChartOptions = this.getAverageRideTimeChartOptions();
    this.registeredUsersChartOptions = this.getRegisteredUsersChartOptions();
    this.cancellationsChartOptions = this.getCancellationsChartOptions();
    this.usersWithoutRidesChartOptions = this.getUsersWithoutRidesChartOptions();
    this.ongoingRidesChartOptions = this.getOngoingRidesChartOptions();
  }

  ngOnInit(): void {
    this.initMap();
  }

  navigateToCreateRide() {
    this.router.navigate(['/app/createride']);
  }

  navigateToRunningRequest() {
    this.router.navigate(['/app/runningrequest']);
  }

  // Methods to get chart options
  private getRatingsChartOptions(): Partial<ChartOptions> {
    return {
      series: [
        {
          name: 'Ratings',
          data: [4, 4.5, 5, 4.2, 4.8, 4.9, 5]
        }
      ],
      chart: {
        height: 350,
        type: 'line',
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: 'Ratings vs Time',
        align: 'left'
      },
      xaxis: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7']
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        }
      }
    };
  }

  private getAverageRideTimeChartOptions(): Partial<ChartOptions> {
    return {
      series: [
        {
          name: 'Average Ride Time (min)',
          data: [30, 25, 35, 20, 40, 30, 45]
        }
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: 'Average Ride Time vs Day',
        align: 'left'
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        }
      }
    };
  }

  private getRegisteredUsersChartOptions(): Partial<ChartOptions> {
    return {
      series: [
        {
          name: 'Registered Users',
          data: [100, 120, 150, 200, 250, 300, 350]
        }
      ],
      chart: {
        height: 350,
        type: 'line',
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: 'Number of Registered Users',
        align: 'left'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        }
      }
    };
  }

  private getCancellationsChartOptions(): Partial<ChartOptions> {
    return {
      series: [
        {
          name: 'Cancellations',
          data: [5, 8, 4, 6, 2, 9, 3]
        }
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: 'Cancellations Over Time',
        align: 'left'
      },
      xaxis: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7']
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        }
      }
    };
  }

  private getUsersWithoutRidesChartOptions(): Partial<ChartOptions> {
    return {
      series: [
        {
          name: 'Users Without Rides',
          data: [10, 15, 20, 25, 30, 35, 40]
        }
      ],
      chart: {
        height: 350,
        type: 'line',
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: 'Users Without Rides',
        align: 'left'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        }
      }
    };
  }

  private getOngoingRidesChartOptions(): Partial<ChartOptions> {
    return {
      series: [
        {
          name: 'Ongoing Rides',
          data: [3, 2, 5, 4, 6, 7, 8]
        }
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: 'Current Ongoing Rides',
        align: 'left'
      },
      xaxis: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7']
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        }
      }
    };
  }
  initMap() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
  
          const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
            zoom: 12,
            center: userLocation,
          });
  
          new google.maps.Marker({
            position: userLocation,
            map: map,
            title: 'Your Current Location',
            icon: {
              url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            },
          });
        },
        (error) => {
          console.error('Error fetching the location: ', error);
          alert('Error: Unable to fetch your location.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  }
}


