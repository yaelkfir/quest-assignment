import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable, mergeMap } from 'rxjs';
import { Worker } from '../../core/models/workers'

@Injectable({
  providedIn: 'root'
})

export class WorkersService {

  selectedWorker$ = new BehaviorSubject<number>(1);
  workers$:BehaviorSubject<Worker[]> = new BehaviorSubject([] as Worker[]);

  constructor(private apiService: ApiService) { }

  setWorkers(): Observable<Worker[]> {
     return this.apiService.getWorkers().pipe(
      mergeMap((workers) => {
        this.workers$.next(workers);
        return this.getWorkers();
      })
     );
  }

  getWorkers(): Observable<Worker[]> {
    return this.workers$.asObservable();
  }

  setSelectedWorker(wid: number) {
    this.selectedWorker$.next(wid);
  }

  getSelectedWorker(): Observable<number> {
    return this.selectedWorker$.asObservable();
  }
}
