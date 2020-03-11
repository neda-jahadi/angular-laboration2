import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.css']
})
export class DeleteArticleComponent implements OnInit {
  @Input() article: object;
  @Output() delete = new EventEmitter<object>();

	deleteThis(): void {
		
    this.delete.emit(this.article);
    console.log(this.article);
	}

  constructor() { }

  ngOnInit(): void {
  }

}
