import { Injectable } from '@angular/core';
import { getDiffInWordsToNow } from './date-utils';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  diffInWordsToNow(diff: string | number | Date) {
    return getDiffInWordsToNow(diff);
  }
}
