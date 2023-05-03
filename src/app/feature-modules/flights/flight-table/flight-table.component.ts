import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Flight, flightTableColumns } from 'src/app/core/models/flights';

@Component({
  selector: 'app-flight-table',
  templateUrl: './flight-table.component.html'
})
export class FlightTableComponent {

  @Input() flights: Flight[] | null = null;
  @Input() selectedflightIndex: number | null = null;
  @Output() rowClick = new EventEmitter();
  columns = [...flightTableColumns];
  displayedColumns = this.columns.map(c => c.columnDef);
}
