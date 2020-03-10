import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  isLoggdIn = false;

	send() {
    //this.router.navigateByUrl('add-artikel');
    this.isLoggdIn=true;
    console.log('inlogged', this.isLoggdIn);
  }

  constructor(private router: Router) { }
}
