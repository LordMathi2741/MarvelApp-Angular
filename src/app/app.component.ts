import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import {TheToolbarComponent} from "./public/toolbar-content/the-toolbar.component";
import {TheFooterComponent} from "./public/footer-content/the-footer.component";
import {HeroTableComponent} from "./heroes/components/hero-table/hero-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TheToolbarComponent, TheFooterComponent, HeroTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice03-pc01';
}
