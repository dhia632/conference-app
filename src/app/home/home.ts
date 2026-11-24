import { Component } from '@angular/core';
import { UserProfile } from '../user-profile/user-profile';
import { FriendsList } from '../friends-list/friends-list';
import { Notifications } from '../notifications/notifications';

@Component({
  selector: 'app-home',
  imports: [UserProfile, FriendsList, Notifications],
  template: `
    <app-user-profile />
    <app-friends-list />
    <app-notifications />
  `,
})
export class Home {}
