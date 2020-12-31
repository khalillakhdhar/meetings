import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../services/meeting.service';
import { Meeting } from '../classes/meeting';

@Component({
  selector: 'app-list-meetings',
  templateUrl: './list-meetings.component.html',
  styleUrls: ['./list-meetings.component.css']
})
export class ListMeetingsComponent implements OnInit {

  constructor(private api:MeetingService) { }
  meetings: any;
  ngOnInit(): void {
    this.meetings = this.api.getMeetings();
    console.log(this.meetings);
  }


}
