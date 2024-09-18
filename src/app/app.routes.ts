import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { LandingComponent } from './components/landing/landing.component';

export const routes: Routes = [
    {path: "nombre-empresa", component: HomeComponent},
    {path: "articulos", component: ArticleComponent},
    {path: "", component: LandingComponent}
];
