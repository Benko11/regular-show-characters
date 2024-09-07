import {
  Component,
  ElementRef,
  Host,
  HostListener,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [],
  template: `<div
    id="cursor"
    [style.transform]="'translate(' + cursorX + 'px, ' + cursorY + 'px)'"
    [class.hover]="linkHovering"
  ></div>`,
  styleUrl: './cursor.component.css',
})
export class CursorComponent {
  cursorX = -50;
  cursorY = -50;
  linkHovering = false;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const offset =
      parseFloat(getComputedStyle(document.documentElement).fontSize) / 2;

    this.cursorX = event.clientX;
    this.cursorY = event.clientY;
    this.checkLinkHover(event);
  }

  checkLinkHover(event: MouseEvent) {
    const element = event.target;
    const closestLink = (element as any).closest('a');
    this.linkHovering = !(closestLink == null);
  }
}
