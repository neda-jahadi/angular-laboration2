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
    this.model = new ArtikleInfo('ARDS strategy tested', 'On January 28, three additional employees at the company tested positive for 2019-nCoV (Patients 2 through 4 in Figure 1). Of these patients, only Patient 2 had contact with the index patient; Distinctions between cell types underpin organizational principles for nervous system function. Functional variation also exists between neurons of the same type. This is exemplified by correspondence between grid cell spatial scales and the synaptic integrative properties of stellate cells (SCs) in the medial entorhinal cortex.', 
    20, 'L.Barrot');
    console.log(this.model);
  }

  //this.myArticle=JSON.stringify(this.model);
  get diagnostic() { 
    
    return JSON.stringify(this.model); }
}
