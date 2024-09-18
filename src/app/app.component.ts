import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { MenulatComponent } from "./components/menulat/menulat.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ArticleComponent } from "./components/article/article.component";
import { LandingComponent } from "./components/landing/landing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, MenulatComponent, FontAwesomeModule, ArticleComponent, LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-quipux-koderx';
}
