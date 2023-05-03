import { Component, OnInit } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';
import { Worker } from '../../../core/models/workers';
import { WorkersService } from 'src/app/core/services/workers.service';
import { FlightsService } from 'src/app/core/services/flights.service';
import { Flight } from 'src/app/core/models/flights';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
})
export class WorkersComponent implements OnInit {
  
  selectedWorker$: Observable<number> = this.workersService.getSelectedWorker();
  selectedFlightIndex$: Observable<number> = this.flightsService.getSelectedFlightIndex();

  workers$: Observable<Worker[]> = this.workersService.getWorkers();
  flights$: Observable<Flight[]> = this.flightsService.getFlights();
  flight$: Observable<Flight> = this.flightsService.getSelectedFlight();

  constructor(
    private workersService: WorkersService,
    private flightsService: FlightsService
  ) {}

  ngOnInit(): void {
    this.setSelectedWorkerSub();
  }

  setSelectedWorkerSub() {
    this.selectedWorker$
      .pipe(
        tap(() => this.flightsService.setSelectedFlightIndex(0)),
        switchMap((wid) => this.flightsService.setFlightsIntervalByWorker(wid)),
        untilDestroyed(this)
      )
      .subscribe();
  }

  selectedWorkerChange(wid: number) {
    this.workersService.setSelectedWorker(wid);
  }

  setSelectedFlight(index: number) {
    this.flightsService.setSelectedFlightIndex(index);
  }
}
