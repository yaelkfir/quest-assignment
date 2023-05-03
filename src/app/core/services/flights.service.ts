import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  filter,
  interval,
  map,
  mergeMap,
  startWith,
  switchMap,
} from 'rxjs';
import { ApiService } from './api.service';
import { Flight } from '../models/flights';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  selectedFlightIndex$ = new BehaviorSubject<number>(0);
  flights$ = new BehaviorSubject<Flight[]>([]);
  
  updateInterval = 60000;

  constructor(private apiService: ApiService) {}

  setFlightsByWorker(wid: number): Observable<Flight[]> {
    return this.apiService.getFlightsByWorker(wid).pipe(
      mergeMap((flights) => {
        this.flights$.next(flights as Flight[]);
        return this.flights$.asObservable();
      })
    );
  }

  getSelectedFlight(): Observable<Flight> {
    return this.getSelectedFlightIndex().pipe(
      switchMap((index) => {
        return this.getFlightByIndex(index);
      })
    );
  }

  setFlightsIntervalByWorker(wid: number) {
    return interval(this.updateInterval).pipe(
      startWith(wid),
      switchMap(() => this.setFlightsByWorker(wid))
    );
  }

  getFlights(): Observable<Flight[]> {
    return this.flights$.asObservable();
  }

  getSelectedFlightIndex(): Observable<number> {
    return this.selectedFlightIndex$.asObservable();
  }

  setSelectedFlightIndex(index: number) {
    const prevIndex = this.selectedFlightIndex$.getValue();
    if(index === prevIndex) {
      return;
    }
    this.selectedFlightIndex$.next(index);
  }

  getFlightByIndex(index: number): Observable<Flight> {
    return this.getFlights().pipe(
      filter((flights) => !!flights.length),
      map((flights) => flights[index || 0])
    );
  }
}
