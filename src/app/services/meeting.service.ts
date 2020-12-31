import { Injectable } from '@angular/core';
import { Meeting } from '../classes/meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  static meetings: Meeting[];
  constructor() {

  //  MeetingService.meetings.push(new Meeting(1,"meeting1", "12/07/2021", "12/07/2021"), new Meeting(2,"meeting2", "13/07/2021", "15/07/2021") ,new Meeting(3,"meeting3", "15/07/2021", "16/07/2021"));
  }
  createMeeting(meeting:Meeting) {
    if (MeetingService.meetings==null)
      MeetingService.meetings = new Array();
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
    console.log("deleted");
  }
}
