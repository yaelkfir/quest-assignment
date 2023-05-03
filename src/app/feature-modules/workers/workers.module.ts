import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { WorkersListComponent } from './workers-list/workers-list.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [WorkersListComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatSelectModule
  ],
  exports: [WorkersListComponent]
})
export class WorkersModule { }
