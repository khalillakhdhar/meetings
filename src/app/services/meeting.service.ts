import { Injectable } from '@angular/core';
import { Meeting } from '../classes/meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  static meetings: Meeting[] = new Array();
  constructor() { }
  additem(item) {
    MeetingService.meetings.push(item);



  }
}
