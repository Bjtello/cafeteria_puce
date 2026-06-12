import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./features/home/home";
import { Nav } from "./shared/nav/nav";
import { Nosotros } from "./features/nosotros/nosotros";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Home, Nav, Nosotros],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cafeteria_puce');
}
