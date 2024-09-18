import { Component } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { ArticleItemsComponent } from "../article-items/article-items.component";

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CarouselComponent, ArticleItemsComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  email = "usuarioapellido@hotmail.com"
}
