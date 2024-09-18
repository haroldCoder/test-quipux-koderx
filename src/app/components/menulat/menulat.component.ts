import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faBoxArchive, faChevronDown, faFileLines, faMinus, faUserLarge,  } from '@fortawesome/free-solid-svg-icons';

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
  file = faFileLines;
  isExpand = false;
  user = faUserLarge;
  chevron = faChevronDown;
  toggle = 0;
  line = faMinus;

  changeExpand(){
    this.isExpand = !this.isExpand;
  }

  changeToggle(num: number){
    this.toggle = num;
  }

  redirectEmpresas(){
    window.location.href = "/nombre-empresa"
  }

  redirectArticulos(){
    window.location.href = "/articulos"
  }
}
