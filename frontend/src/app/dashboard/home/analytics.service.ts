import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  constructor() {}

  getRatingsData(): Observable<any> {
    return of({
      ratings: [5, 4, 3, 2, 1],
      labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star']
    });
  }

  getRegisteredUsersData(): Observable<any> {
    return of([1000]); // Dummy data for registered users
  }

  getCancellationsData(): Observable<any> {
    return of([120]); // Dummy data for cancellations
  }

  getOngoingRidesData(): Observable<any> {
    return of([35]); // Dummy data for ongoing rides
  }

  getUsersWithoutRidesData(): Observable<any> {
    return of([50]); // Dummy data for users without rides
  }
}
