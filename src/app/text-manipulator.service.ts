import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextManipulatorService {
  constructor() {}

  addParagraphs(text: string): string[] {
    return text.split('\n').filter((item) => item.trim() !== '');
  }
}
