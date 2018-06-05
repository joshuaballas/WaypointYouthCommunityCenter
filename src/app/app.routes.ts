import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { TeamComponent } from './team/team.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
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
  { path: '**', component: HomeComponent }
];
