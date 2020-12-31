import { Component, OnInit } from '@angular/core';
import { Meeting } from '../classes/meeting';
import { MeetingService } from '../services/meeting.service';

@Component({
  selector: 'app-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.css']
})
export class AddMeetingComponent implements OnInit {
meet:Meeting
  constructor(private api:MeetingService) { }
  meetings: any;

  ngOnInit(): void {
    this.meet = new Meeting("","","","");
  }
  add() {

    this.api.createMeeting(this.meet);
  }

}
