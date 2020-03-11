import { Component } from '@angular/core';
import { CommunicationService } from './communication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggdIn= false;
  title = 'lab2';
  constructor(private communicationService: CommunicationService) { }
  ngOnInit(): void {
    this.communicationService.observableSource.subscribe(logstatus => this.isLoggdIn= logstatus);
  }
}
