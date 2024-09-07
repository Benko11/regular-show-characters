import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'character-card',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css',
  host: {
    '(click)': 'showCardDetails()',
  },
})
export class CharacterCardComponent {
  @Input() id!: number;
  @Input() url!: string;
  @Input() name!: string;

  showCardDetails() {
    console.log(`you have clicked ${this.name}`);
  }
}
