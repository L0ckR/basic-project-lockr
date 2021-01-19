import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ArticleService } from 'src/services/article.service';
import { Article } from 'src/models/article.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
  closeResult = '';
  article:Article;
  size:"xl";

  constructor(private modalService: NgbModal, private ArticleService: ArticleService) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
    
  }
  drProvider:string="";
  addNewArticle() {
    this.article.currentRate=this.article.currentRate*10;
    if(this.article.provider=='Rostelecom'){
      this.ArticleService.rateRostel=(this.ArticleService.rateRostel+this.article.currentRate)/this.ArticleService.i0;
      this.ArticleService.i0++;
    }else if(this.article.provider=='QWERTY'){
      this.ArticleService.rateQWERTY=(this.ArticleService.rateQWERTY+this.article.currentRate)/this.ArticleService.i1;
      this.ArticleService.i1++;
    }else if(this.article.provider=='MGTS'){
      this.ArticleService.rateMGTS=(this.ArticleService.rateMGTS+this.article.currentRate)/this.ArticleService.i2;
      this.ArticleService.i2++;
    }else if(this.article.provider=='Avocado'){
      this.ArticleService.rateAvocad=(this.ArticleService.rateAvocad+this.article.currentRate)/this.ArticleService.i3;
      this.ArticleService.i3++;
    }else if(this.article.provider=='SpeedyLine'){
      this.ArticleService.rateSpeedy=(this.ArticleService.rateSpeedy+this.article.currentRate)/this.ArticleService.i4;
      this.ArticleService.i4++;
    }
    else{
      this.article.provider=this.drProvider
      this.article.drProv=1
    }
    this.article.currentRate=this.article.currentRate/10;
    this.ArticleService.addArticle(this.article)
    this.article= new Article()
    this.drProvider=""
  }
  ngOnInit() {
    this.article= new Article()
  }
}