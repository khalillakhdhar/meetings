import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMeetingsComponent } from './list-meetings/list-meetings.component';

const routes: Routes = [
  { path: "", component: ListMeetingsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
