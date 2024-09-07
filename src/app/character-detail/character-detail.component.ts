import { Component } from '@angular/core';
import { CharacterInfoComponent } from './character-info/character-info.component';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CharacterInfoComponent],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css',
})
export class CharacterDetailComponent {}
