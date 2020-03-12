import { Injectable } from '@angular/core';
import { ArtikleInfo} from './artikle-info';
@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  
  artikleList: ArtikleInfo[] = [
		{ title: 'title1', content:'content1', time: 1, author:'author1' },
		{ title: 'title2', content:'content2', time: 2, author:'author2' },
		{ title: 'title3', content:'content3', time: 3, author:'author3' },
    { title: 'title4', content:'content4', time: 4, author:'author4' },
    { title: 'title5', content:'content5', time: 5, author:'author5' },
    { title: 'title6', content:'content6', time: 6, author:'author6' },
    { title: 'title7', content:'content7', time: 7, author:'author7' }
  ];
  listLength: number = this.artikleList.length;
  senasteArtiklar: ArtikleInfo[]=[];
  getSenaste(): ArtikleInfo[] {
    this.senasteArtiklar=[];
    for(let i=0; i<5; i++){this.senasteArtiklar.push(this.artikleList[i])}
    return this.senasteArtiklar;
  }
  getArtikleList(): ArtikleInfo[] {
		return this.artikleList;
  }
  
  addNewArticle(element: any): void {
    
    
    this.artikleList.unshift(element);
    
  }
  
  deleteArticle(article: object){
     this.artikleList=this.artikleList.filter((ele)=>{return ele!=article});
     
  }
  constructor() { }
}
