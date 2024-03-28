/* eslint-disable prettier/prettier */
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public isDarkMode: boolean = false;
  
  onDarkMode():void {
    this.isDarkMode = !this.isDarkMode
    console.log('Clic');
  }
}
