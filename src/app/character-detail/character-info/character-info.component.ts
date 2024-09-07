import { Component, Input } from '@angular/core';
import { Character, CharacterService } from '../../character.service';
import { ActivatedRoute, Router } from '@angular/router';
import {} from '@angular/platform-browser';

@Component({
  selector: ' character-info',
  standalone: true,
  imports: [],
  templateUrl: './character-info.component.html',
  styleUrl: './character-info.component.css',
})
export class CharacterInfoComponent {
  characterId: string;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {
    this.characterId = this.route.snapshot.paramMap.get('id') || '';
  }

  getCharacterInfo() {
    return this.characterService.getCharacterById(+this.characterId);
  }
}
