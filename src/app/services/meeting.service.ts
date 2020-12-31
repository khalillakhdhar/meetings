import { Injectable } from '@angular/core';
import { Meeting } from '../classes/meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  static meetings: Meeting[] = new Array();
  constructor() {
    MeetingService.meetings.push(new Meeting("meeting1","12/07/2021","12/07/2021"),new Meeting("meeting2","13/07/2021","15/07/2021"))
  }
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
