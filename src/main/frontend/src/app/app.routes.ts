import { Routes } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { ChatContainerComponent } from '../chat-container/chat-container.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'chat', component: ChatContainerComponent },
  { path: '**', redirectTo: '' }
];
