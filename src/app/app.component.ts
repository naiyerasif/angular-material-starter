import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Material Starter";
  tagline = "is a template for projects based on Angular Material";
  features = [
    {
      title: "Sensibly Compatible",
      description:
        "Polyfills for IE and older browsers for graceful degradation and progressive enhancement"
    },
    {
      title: "System fonts",
      description:
        "Native Font Stack (instead of Roboto) for better legibility and glyph support"
    },
    {
      title: "SASS Support",
      description:
        "SASS-based styling for advanced theme customization with toolkit to generate multiple themes"
    },
    {
      title: "Theme Manager",
      description:
        "Inbuilt theme management module with bundled light and dark themes"
    },
    {
      title: "Material Iconography",
      description:
        "Material Design Icons with a huge set of icons and style variations"
    },

    {
      title: "No-fuss Material Module",
      description:
        "Ready-to-use (and customize) Dependency Module to load Material Components"
    }
  ];

  constructor() {}
}
