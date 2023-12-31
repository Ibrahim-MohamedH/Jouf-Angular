import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddMeetingComponent } from './settings/meeting/add-meeting/add-meeting.component';
import { EditMeetingComponent } from './settings/meeting/edit-meeting/edit-meeting.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RequestComponent } from './createCommittee/request/request.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SettingsComponent as ComitteeSettingsComponent } from './createCommittee/settings/settings.component';
import { ListComponent as listMembersComponent } from './members/list/list.component';
import { ProfileComponent } from './members/profile/profile.component';
import { EditProfileComponent } from './members/edit-profile/edit-profile.component';
import { MeetingLocationComponent } from './settings/meeting/meeting-location/meeting-location.component';
import { AddLocationComponent } from './settings/add-location/add-location.component';
import { AddOrderComponent } from './settings/add-order/add-order.component';
import { TracingDecisionComponent } from './settings/tracing-decision/tracing-decision.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // meetings
  { path: 'add_meeting', component: AddMeetingComponent },
  { path: 'edit_meeting', component: EditMeetingComponent },
  { path: 'meeting_location', component: MeetingLocationComponent },
  // committee
  { path: 'request_comittee', component: RequestComponent },
  { path: 'committee_settings', component: ComitteeSettingsComponent },
  // Members
  { path: 'list_members', component: listMembersComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'edit_profile/:id', component: EditProfileComponent },
  // statistics
  { path: 'stats', component: StatisticsComponent },
  // more Settings
  { path: 'add_location', component: AddLocationComponent },
  { path: 'add_order', component: AddOrderComponent },
  { path: 'tracing_decising', component: TracingDecisionComponent },
  // otherwise / not found
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
