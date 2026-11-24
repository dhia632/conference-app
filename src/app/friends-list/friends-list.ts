import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends-list',
  imports: [FormsModule],
  templateUrl: './friends-list.html',
  styleUrl: './friends-list.css',
})
export class FriendsList {
  // Démonstration du two-way binding : les 3 champs partagent le même signal
  readonly name = signal('Ahmed');
  readonly friends = signal(['Sami', 'Sarra', 'Amine']);
}
