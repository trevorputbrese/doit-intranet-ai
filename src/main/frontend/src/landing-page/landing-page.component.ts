import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatButton,
    MatIcon
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  constructor(private router: Router) {}

  // Navigation to chat interface
  navigateToChat(): void {
    this.router.navigate(['/chat']);
  }

  // Fictional agency links
  agencyLinks = [
    { title: 'HR Portal', icon: 'people', description: 'Access employee records and benefits', url: '#' },
    { title: 'IT Support', icon: 'support_agent', description: 'Submit tickets and track requests', url: '#' },
    { title: 'Employee Directory', icon: 'contacts', description: 'Find colleagues and departments', url: '#' },
    { title: 'Document Library', icon: 'folder', description: 'Access policy documents and forms', url: '#' },
    { title: 'Training Center', icon: 'school', description: 'Complete required training modules', url: '#' },
    { title: 'Facilities', icon: 'business', description: 'Room bookings and facility requests', url: '#' }
  ];
}
