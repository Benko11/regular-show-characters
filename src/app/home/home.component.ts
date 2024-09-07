import { Component } from '@angular/core';
import { CharacterService } from '../character.service';
import { CharacterCardComponent } from '../character-card/character-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CharacterCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private characterService: CharacterService) {}

  getCharacters() {
    return this.characterService.getCharacters();
  }
}
