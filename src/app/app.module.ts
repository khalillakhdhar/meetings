import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMeetingsComponent } from './list-meetings/list-meetings.component';
import { DetailsMeetingComponent } from './details-meeting/details-meeting.component';
import { AddMeetingComponent } from './add-meeting/add-meeting.component';
import { EditMeetingComponent } from './edit-meeting/edit-meeting.component';
import {  FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListMeetingsComponent,
    DetailsMeetingComponent,
    AddMeetingComponent,
    EditMeetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
