import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  label: string;
  path: string;
  fragment?: string;
}

@Component({
  selector: 'app-nav-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-menu.html',
  styleUrl: './nav-menu.css',
})
export class NavMenu {
  readonly items = signal<MenuItem[]>([
    { label: 'Accueil', path: '/' },
    { label: 'Profil', path: '/', fragment: 'profil' },
    { label: 'Conférences', path: '/conferences' },
    { label: 'Amis', path: '/', fragment: 'amis' },
    { label: 'Notifications', path: '/', fragment: 'notifications' },
    { label: 'Admin', path: '/admin' },
  ]);
}
