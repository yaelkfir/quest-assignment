import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Worker } from '../models/workers'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getWorkers(): Observable<Worker[]> {
    return this.httpClient.get<Worker[]>('/api/workers');
  }

  getFlightsByWorker(wid: number) {
    return this.httpClient.get('/api/flights/' +  wid);
  }
}
