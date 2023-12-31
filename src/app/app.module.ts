import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Components
// - Main component:
import { HomeComponent } from './home/home.component';
// - shared components:
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
// - Meetings Components:
import { AddMeetingComponent } from './settings/meeting/add-meeting/add-meeting.component';
import { EditMeetingComponent } from './settings/meeting/edit-meeting/edit-meeting.component';
import { MeetingLocationComponent } from './settings/meeting/meeting-location/meeting-location.component';
// - Members Components:
import { ListComponent as listMembersComponent } from './members/list/list.component';
import { ProfileComponent } from './members/profile/profile.component';
import { EditProfileComponent } from './members/edit-profile/edit-profile.component';
// - Other Components:
import { RequestComponent } from './createCommittee/request/request.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SettingsComponent as ComitteeSettingsComponent } from './createCommittee/settings/settings.component';
import { AddLocationComponent } from './settings/add-location/add-location.component';
import { AddOrderComponent } from './settings/add-order/add-order.component';
import { TracingDecisionComponent } from './settings/tracing-decision/tracing-decision.component';
// - Not Found (404) Component:
import { NotFoundComponent } from './not-found/not-found.component';
// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
// Api and Forms handling
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AddMeetingComponent,
    HomeComponent,
    EditMeetingComponent,
    NotFoundComponent,
    RequestComponent,
    StatisticsComponent,
    ComitteeSettingsComponent,
    listMembersComponent,
    ProfileComponent,
    EditProfileComponent,
    MeetingLocationComponent,
    AddLocationComponent,
    AddOrderComponent,
    TracingDecisionComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
