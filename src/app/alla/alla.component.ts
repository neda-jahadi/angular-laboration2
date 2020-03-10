import { Component, OnInit } from '@angular/core';
import { ArtikleInfo } from '../artikle-info';
import { FormServiceService } from '../form-service.service';
@Component({
  selector: 'app-alla',
  templateUrl: './alla.component.html',
  styleUrls: ['./alla.component.css']
})
export class AllaComponent implements OnInit {
  articleList: ArtikleInfo[] = [];
  constructor(public formService: FormServiceService) { }

  ngOnInit(): void {
    this.articleList = this.formService.getArtikleList();
  }

}
