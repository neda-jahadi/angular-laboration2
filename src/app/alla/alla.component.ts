import { Component, OnInit } from '@angular/core';
import { ArtikleInfo } from '../artikle-info';
import { FormServiceService } from '../form-service.service';
@Component({
  selector: 'app-alla',
  templateUrl: './alla.component.html',
  styleUrls: ['./alla.component.css']
})
export class AllaComponent implements OnInit {
  isLoggdIn: boolean= false;
  articleList: ArtikleInfo[] = [];
  deleteHere(text: object): void{
    this.formService.deleteArticle(text);
    this.articleList = this.formService.getArtikleList();
  }
 
  
  constructor(public formService: FormServiceService) { }

  ngOnInit(): void {
    this.articleList = this.formService.getArtikleList();
  }

}
