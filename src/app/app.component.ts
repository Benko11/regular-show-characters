import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CursorComponent } from './cursor/cursor.component';
import { FloatingButtonComponent } from './floating-button/floating-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CharacterCardComponent,
    RouterLink,
    RouterLinkActive,
    CursorComponent,
    FloatingButtonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {}
