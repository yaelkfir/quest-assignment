import { Pipe, PipeTransform } from '@angular/core';
import { intervalToDuration } from 'date-fns'

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(totalMinutes: number): string {
    const duration = intervalToDuration({ start: 0, end: totalMinutes * 60000 });
    const hours = duration.hours;
    const minutes = duration.minutes;
    const res = [];
    if (hours) {
      res.push(hours + 'h');
    }
    if (minutes) {
      res.push(minutes + 'm');
    }
    return res.join(' ');
  }
}
