import { Injectable } from '@angular/core';
import { ArtikleInfo} from './artikle-info';
@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  artikleList: ArtikleInfo[] = [
    { title: 'Robots in the bedroom',
     content:'Understanding cloud technology was the No. 1 imperative for executives this decade. Next up: How does artificial intelligence change business and management?',
     time: 20, author:'Sean Silverthorne' },
    { title: 'Use artificial inteligence', content:'Setting sales targets has always been an inexact science, with serious consequences if done poorly. Using AI-based advanced analytics might be the answer, argues Doug Chung.',
     time: 15, author:'Michael Blanding' },
    { title: 'Making technical hire', content:'CEOs are usually more comfortable making key hires on the business side of the house than the technology side. Here is what executives need to understand about technical hires.',
     time: 17, author:'Julia Austin' },
    { title: 'Going digital', content:'More and more nontechnology companies are adopting digital technologies like AI, data analytics, and machine learning.',
     time: 31, author:'Wilbur Chen' },
    { title: 'Two decates later', content:'SUMMING UP Have recent advances in technology such as artificial intelligence ushered in (finally) the "new economy?" Not so fast, answer James Heskett.',
     time: 24, author:'James Heskett' },
    { title: 'Componies like big data', content:'Big data is a critical competitive advantage for companies that know how to use it. Harvard Business School faculty share insights that they teach to executives.',
    time: 11, author:'Dina Gerdeman' },
    { title: 'The promises and limitations', content:'Recent stories chart the rise of big data, its impact on business, and how it affects our lives every day.',
    time: 21, author:'Sean Silverthorne' }
  ];
  listLength: number = this.artikleList.length;
  // senasteArtiklar: ArtikleInfo[]=[];
	getSenaste(): ArtikleInfo[]
	{
		let senasteArtiklar=[];
		for(let i=0; i<5; i++)
		{
			senasteArtiklar.push(this.artikleList[i])
		}
		senasteArtiklar = senasteArtiklar.map(article => ({
			title: article.title,
			content: article.content.substring(0, 30),
			author: article.author,
			time: article.time
		}));
		console.log(senasteArtiklar);
		return senasteArtiklar;
	}

  getArtikleList(): ArtikleInfo[]
  {
	  return this.artikleList;
  }

  addNewArticle(element: any): void
  {
	  this.artikleList.unshift(element);
  }

  deleteArticle(article: object)
  {
	  this.artikleList=this.artikleList.filter((ele)=>{return ele!=article});
  }

  constructor()
  {}
}
