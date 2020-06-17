import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { TeamComponent } from './team/team.component';
import { CampProgramComponent } from './camp-program/camp-program.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'events',
    component: EventsComponent,
    data: { title: 'Events' }
  },
  {
    path: 'team',
    component: TeamComponent,
    data: { title: 'Team' }
  },
  {
    path: 'camp',
    component: CampProgramComponent,
    data: { title: 'Camp Program' }
  },
  { path: '**', component: HomeComponent }
];
