import { Injectable } from '@angular/core';
import { ArtikleInfo} from './artikle-info';
@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  artikleList: ArtikleInfo[] = [
		{ title: 'title1', content:'content1', time: 4, author:'author1' },
		{ title: 'title2', content:'content2', time: 5, author:'author2' },
		{ title: 'title3', content:'content3', time: 6, author:'author3' },
		{ title: 'title4', content:'content4', time: 7, author:'author4' }
	];
  getArtikleList(): ArtikleInfo[] {
		return this.artikleList;
  }
  getListAvTitles():any {
    return this.artikleList;
  }
  constructor() { }
}
