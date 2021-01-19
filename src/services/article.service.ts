import { Injectable } from '@angular/core';
import { Article } from 'src/models/article.model';

@Injectable({ 
  providedIn: 'root'
})
export class ArticleService {
  articles: Array<Article>=[];
  drArticle: Array<Article>=[];
  filteredArticle: Array<Article>=[];
  rateRostel=0;
  rateQWERTY=0;
  rateMGTS=0;
  rateAvocad=0;
  rateSpeedy=0;
  i0=1;
  i1=1;
  i2=1;
  i3=1;
  i4=1;
  getArticles(){
    return this.articles;
  }
  getArticlesDr(){
    this.drArticle=this.articles.filter(article => article.drProv === 1);
    return this.drArticle;
  }
  getArticlesProv(prov:string){
    this.filteredArticle=this.articles.filter(article => article.provider === prov);
    return this.filteredArticle;
  }
  addArticle(article: Article){
    this.articles.push(article);
  }
  constructor() { }
}
