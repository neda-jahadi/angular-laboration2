import { Component, OnInit } from '@angular/core';
import { ArtikleInfo } from '../artikle-info';
import { FormServiceService } from '../form-service.service';
import {CommunicationService} from '../communication.service'
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
 
  
  constructor(
    public formService: FormServiceService,
    public communicationService: CommunicationService) { }

  ngOnInit(): void {
    this.articleList = this.formService.getArtikleList();
    this.communicationService.observableSource.subscribe(logstatus => this.isLoggdIn= logstatus);
  }

}
