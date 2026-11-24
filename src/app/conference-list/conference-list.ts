import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Conference } from '../models/conference';
import { ConferenceCard } from '../conference-card/conference-card';

@Component({
  selector: 'app-conference-list',
  imports: [FormsModule, ConferenceCard],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  readonly conferences = signal<Conference[]>([
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Découverte des nouveautés d’Angular 21 : signals, zoneless et control flow.',
      date: new Date(2027, 10, 15),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 75,
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique sur signal(), computed() et effect().',
      date: new Date(2027, 10, 30),
      place: 'Ariana',
      maxParticipants: 50,
      nbParticipants: 44,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Les tendances du développement web moderne.',
      date: new Date(2027, 10, 20),
      place: 'Sousse',
      maxParticipants: 80,
      nbParticipants: 80,
    },
  ]);

  readonly search = signal('');

  /** Conférences à venir dont le titre contient la saisie (insensible à la casse). */
  readonly filtered = computed(() => {
    const term = this.search().trim().toLowerCase();
    const now = new Date();
    return this.conferences()
      .filter((c) => c.date >= now)
      .filter((c) => c.title.toLowerCase().includes(term));
  });

  register(id: number): void {
    this.conferences.update((list) =>
      list.map((c) =>
        c.id === id && c.nbParticipants < c.maxParticipants
          ? { ...c, nbParticipants: c.nbParticipants + 1 }
          : c,
      ),
    );
  }
}
