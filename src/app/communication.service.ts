import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  isLoggdIn = false;

	private source = new BehaviorSubject<boolean>(false);
	public observableSource = this.source.asObservable();

	sendAuthorization() {
    this.isLoggdIn=true;
		this.source.next(this.isLoggdIn); 
  }
  sendUnAuthorization() {
    this.isLoggdIn=false;
		this.source.next(this.isLoggdIn); 
	}

  constructor(private router: Router) { }
}
