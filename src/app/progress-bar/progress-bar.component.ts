import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/services/article.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit{
  rateRostel: number;
  rateQWERTY: number;
  rateMGTS: number;
  rateAvocad: number;
  rateSpeedy: number;
  constructor(private ArticleService: ArticleService) { 
  }
  ngOnInit(): void {
  }
  progress(){
    this.rateRostel=this.ArticleService.rateRostel;
    this.rateMGTS=this.ArticleService.rateMGTS;
    this.rateQWERTY=this.ArticleService.rateQWERTY;
    this.rateSpeedy=this.ArticleService.rateSpeedy;
    this.rateAvocad=this.ArticleService.rateAvocad;
  }

}
