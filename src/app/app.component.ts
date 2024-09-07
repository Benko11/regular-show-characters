import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CharacterCardComponent } from './character-card/character-card.component';
import { Character, CharacterService } from './character.service';
import { CursorComponent } from './cursor/cursor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CharacterCardComponent,
    RouterLink,
    RouterLinkActive,
    CursorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {}
