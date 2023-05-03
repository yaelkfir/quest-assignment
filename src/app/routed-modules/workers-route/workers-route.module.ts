import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersRouteRoutingModule } from './workers-route-routing.module';
import { WorkersComponent } from '../workers-route/workers/workers.component';
import { WorkersModule } from 'src/app/feature-modules/workers/workers.module';
import { FlightsModule } from 'src/app/feature-modules/flights/flights.module';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [WorkersComponent],
  imports: [
    CommonModule,
    WorkersRouteRoutingModule,
    WorkersModule,
    FlightsModule,
    MatToolbarModule,
  ],
})
export class WorkersRouteModule {}
