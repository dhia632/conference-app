import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  readonly items = signal([
    'Nouvelle conférence : Angular 21 Conference',
    'Rappel : Signals Workshop le 30/11/2027',
  ]);
  readonly count = computed(() => this.items().length);
  readonly visible = signal(false);

  toggle(): void {
    this.visible.update((v) => !v);
  }
}
