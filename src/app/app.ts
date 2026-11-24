import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { NavMenu } from './nav-menu/nav-menu';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, NavMenu, Footer],
  templateUrl: './app.html',
})
export class App {}
