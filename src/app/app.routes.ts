import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Component } from '@angular/core';
import { ConferenceList } from './conference-list/conference-list';

@Component({
  template: '<section class="card"><div class="content"><h2>Espace administrateur</h2><p>Section à venir.</p></div></section>',
})
export class Admin {}

export const routes: Routes = [
  { path: '', component: Home, title: 'Accueil' },
  { path: 'conferences', component: ConferenceList, title: 'Conférences' },
  { path: 'admin', component: Admin, title: 'Admin' },
  { path: '**', redirectTo: '' },
];
