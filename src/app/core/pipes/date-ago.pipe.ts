import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo',
  pure: true,
})
export class DateAgoPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    if (!value) {
      return 'a long time ago';
    }

    let time = (Date.now() - Date.parse(value)) / 1000;
    if (time < 10) {
      return 'Just now';
    } else if (time < 60) {
      return 'A moment ago';
    }

    const divider = [60, 60, 24, 30, 12];
    const string = [' second', ' minute', ' hour', ' day', ' month', ' year'];

    let i;
    for (i = 0; Math.floor(time / divider[i]) > 0; i++) {
      time /= divider[i];
    }

    const plural = Math.floor(time) > 1 ? 's' : '';

    return Math.floor(time) + string[i] + plural + ' ago';
  }
}
