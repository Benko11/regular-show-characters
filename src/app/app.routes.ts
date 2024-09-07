import { Routes } from '@angular/router';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'character-detail/:id', component: CharacterDetailComponent },
];
