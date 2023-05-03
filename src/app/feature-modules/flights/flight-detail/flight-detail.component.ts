import { Component, Input } from '@angular/core';
import { Flight } from 'src/app/core/models/flights';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.scss']
})
export class FlightDetailComponent {
  @Input() flight: Flight | null = null;
}
