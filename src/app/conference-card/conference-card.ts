import { Component, computed, input, output, signal } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Conference } from '../models/conference';

@Component({
  selector: 'app-conference-card',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './conference-card.html',
  styleUrl: './conference-card.css',
})
export class ConferenceCard {
  // Parent -> enfant
  readonly conference = input.required<Conference>();
  // Enfant -> parent
  readonly register = output<number>();

  readonly showDetails = signal(false);

  readonly remaining = computed(
    () => this.conference().maxParticipants - this.conference().nbParticipants,
  );
  readonly isFull = computed(() => this.remaining() <= 0);
  readonly isAlmostFull = computed(() => this.remaining() > 0 && this.remaining() < 10);

  toggleDetails(): void {
    this.showDetails.update((v) => !v);
  }

  onRegister(event: Event): void {
    event.stopPropagation(); // ne pas déclencher l'affichage des détails
    if (!this.isFull()) {
      this.register.emit(this.conference().id);
    }
  }
}
