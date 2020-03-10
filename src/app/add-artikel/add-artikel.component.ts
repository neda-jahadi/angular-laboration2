import { Component, OnInit } from '@angular/core';
import { ArtikleInfo } from '../artikle-info';
import { FormServiceService } from '../form-service.service';
@Component({
  selector: 'app-add-artikel',
  templateUrl: './add-artikel.component.html',
  styleUrls: ['./add-artikel.component.css']
})
export class AddArtikelComponent implements OnInit {
  //myArticle;
  model: ArtikleInfo;
  submit(): void {
    this.formService.addNewArticle(this.model);
  }
  constructor(public formService: FormServiceService) { }

  ngOnInit(): void {
    this.model = new ArtikleInfo('newTitle', 'newContent', 2, 'newAuthor');
    console.log(this.model);
  }

  //this.myArticle=JSON.stringify(this.model);
  get diagnostic() { 
    
    return JSON.stringify(this.model); }
}
