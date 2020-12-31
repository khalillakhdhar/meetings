import { Injectable } from '@angular/core';
import { Meeting } from '../classes/meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  static meetings: Meeting[] = new Array();
  constructor() { }
  createMeeting(meeting) {
    MeetingService.meetings.push(meeting);
    console.log(meeting+" added successfully")
  }
  getMeetings() {
    return MeetingService.meetings;
  }
  getMeeting(indice) {
    return MeetingService.meetings[indice];
  }
  editMeeting(indice, meeting) {
    MeetingService.meetings[indice] = meeting;
  }
  deleteMeeting(indice) {
delete MeetingService.meetings[indice];
  }
}
