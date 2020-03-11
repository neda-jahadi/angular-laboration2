import { Component, OnInit } from '@angular/core';
import { ArtikleInfo } from '../artikle-info';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-startsidan',
  templateUrl: './startsidan.component.html',
  styleUrls: ['./startsidan.component.css']
})
export class StartsidanComponent implements OnInit {
  articleList: ArtikleInfo[] = [];
  senaste: object;
  constructor(public formService: FormServiceService) { }

  ngOnInit(): void {
    this.articleList = this.formService.getArtikleList();
     this.senaste=this.articleList[0]
  }

}
