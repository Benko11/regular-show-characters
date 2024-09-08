import { Component, Input } from '@angular/core';
import { Character, CharacterService } from '../../character.service';
import { ActivatedRoute, Router } from '@angular/router';
import {} from '@angular/platform-browser';
import { TextManipulatorService } from '../../text-manipulator.service';

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
    private characterService: CharacterService,
    private textManipulatorService: TextManipulatorService
  ) {
    this.characterId = this.route.snapshot.paramMap.get('id') || '';
    console.log('hello');
  }

  getCharacterInfo() {
    const extracted = this.characterService.getCharacterById(+this.characterId);

    console.log(
      extracted.description.split('\n').filter((item) => item.trim() !== '')
    );

    return {
      ...extracted,
      description: this.textManipulatorService.addParagraphs(
        extracted.description
      ),
    };
  }
}
