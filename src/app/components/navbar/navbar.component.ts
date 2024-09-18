import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  nav_text = "Nombre Empresa";
  chevron = faChevronDown;
  constructor(private router: Router,library: FaIconLibrary){
    
    library.addIcons(faHome, faUserCircle);
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateNavText();
    });
  }

  updateNavText() {
    const currentRoute = this.router.url;
    console.log(this.router.url);
    
    switch (currentRoute) {
      case '/articulos':
        this.nav_text = 'Articulo';
        break;
      default:
        this.nav_text = 'Nombre Empresa';
        break;
    }
  }
}
