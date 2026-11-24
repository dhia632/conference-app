import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  readonly name = signal('Ahmed');
  readonly email = signal('ahmed@email.com');
}
