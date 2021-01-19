import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { PagesComponent } from './main-content/pages/pages.component';
import { ArticleComponent } from './main-content/article/article.component';
import { ArticleService } from 'src/services/article.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  declarations: [
    AppComponent, FormComponent, ProgressBarComponent, PagesComponent, ArticleComponent, NotFoundComponent, EmptyComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, NgbModule, NgbPaginationModule, NgbAlertModule, FormsModule,HttpClientModule
  ],
  exports: [],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
