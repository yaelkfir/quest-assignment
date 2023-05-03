import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Worker } from 'src/app/core/models/workers';
@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.scss']
})
export class WorkersListComponent {
  @Input() workers: Worker[] | null = null;
  @Input() selectedWorker: number | null  =  null;

  @Output() selectedChange = new EventEmitter();

  selectionChange(e: MatSelectionListChange) {
    this.selectedChange.emit(e.options[0]?.value);
  }
}
