import { Component } from '@angular/core';
import { CommunicationService } from './communication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab2';
  constructor(private communicationService: CommunicationService) { }
}
