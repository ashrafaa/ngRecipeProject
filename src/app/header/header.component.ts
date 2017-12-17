import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() page = new EventEmitter<string>();

  onLinkSelect(link: string) {
    this.page.emit(link);
  }
}