import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeetingService } from '../services/meeting.service';
import { Meeting } from '../classes/meeting';

@Component({
  selector: 'app-details-meeting',
  templateUrl: './details-meeting.component.html',
  styleUrls: ['./details-meeting.component.css']
})
export class DetailsMeetingComponent implements OnInit {
  id: number;
  constructor(private api: MeetingService, private route: ActivatedRoute) {
     this.route.queryParams.subscribe(params => {
         this.id = params['id'];
        console.log(this.id); // Print the parameter to the console.
    });

   }
  meeting: Meeting;

  ngOnInit(): void {
  //  console.log(this.id);
    this.id--;
    this.meeting = this.api.getMeeting(this.id);
    console.log(this.meeting);
  }
  delete() {
    if(confirm("êtes vous sûre de vouloir supprimer l'élément? "+this.id))
    this.api.deleteMeeting(this.id);


  }

}
