import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-items',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './article-items.component.html',
  styleUrl: './article-items.component.css'
})

export class ArticleItemsComponent implements OnInit {
  articulos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.http.get<any[]>('resources/articulos.json').subscribe(data => {
      this.articulos = data;
    });
  }
}
