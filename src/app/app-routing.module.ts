import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMeetingsComponent } from './list-meetings/list-meetings.component';
import { AddMeetingComponent } from './add-meeting/add-meeting.component';
import { DetailsMeetingComponent } from './details-meeting/details-meeting.component';
import { EditMeetingComponent } from './edit-meeting/edit-meeting.component';

const routes: Routes = [
  { path: "", component: ListMeetingsComponent },
  { path: "ajout", component: AddMeetingComponent },
  { path: "detaille", component: DetailsMeetingComponent },
  { path: "edit", component: EditMeetingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
