import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  

	send() {
    this.router.navigateByUrl('add-artikel');
  }

  constructor(private router: Router) { }
}
