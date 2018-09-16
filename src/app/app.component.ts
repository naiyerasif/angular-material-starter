import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Material Starter';
  tagline = 'A simple starter project for Angular Material 6';
  features = [
      'Angular Material 6',
      'Polyfills for IE',
      'Native Font Stack (instead of Roboto)',
      'Material Design Icons',
      'SCSS for theme customization',
      'Dependency Module to load Material Components'
  ]
}
