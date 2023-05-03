import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Worker } from '../models/workers'
import { Flight } from '../models/flights';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getWorkers(): Observable<Worker[]> {
    return this.httpClient.get<Worker[]>('/api/workers');
  }

  getFlightsByWorker(wid: number): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>('/api/flights/' +  wid);
  }
}
