import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './main-content/article/article.component';
import { PagesComponent } from './main-content/pages/pages.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmptyComponent } from './empty/empty.component';

const routes: Routes = [
  { path: 'tutor', component: ArticleComponent },
  { path: 'news', component: PagesComponent },
  { path: '', component: EmptyComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
