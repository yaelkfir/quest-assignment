import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { FlightTableComponent } from './flight-table/flight-table.component';
import { DurationModule } from '../../core/pipes/duration/duration.module';

@NgModule({
  declarations: [FlightDetailComponent, FlightTableComponent],
  imports: [CommonModule, MatListModule, MatTableModule, DurationModule],
  exports: [FlightDetailComponent, FlightTableComponent],
})
export class FlightsModule {}
