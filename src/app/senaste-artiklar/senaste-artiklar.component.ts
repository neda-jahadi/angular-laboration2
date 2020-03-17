import { Component, OnInit } from '@angular/core';
import { FormServiceService } from '../form-service.service';
import { ArtikleInfo } from '../artikle-info';

@Component({
  selector: 'app-senaste-artiklar',
  templateUrl: './senaste-artiklar.component.html',
  styleUrls: ['./senaste-artiklar.component.css']
})
export class SenasteArtiklarComponent implements OnInit
{
	articleList: ArtikleInfo[] = [];

	constructor(public formService: FormServiceService)
	{}
	ngOnInit(): void
	{
		this.articleList = this.formService.getSenaste();
	}
}
