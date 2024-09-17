import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faBoxArchive, faFileLines,  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menulat',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './menulat.component.html',
  styleUrl: './menulat.component.css'
})
export class MenulatComponent {
  bars = faBars;
  box = faBoxArchive;
  file = faFileLines
}
