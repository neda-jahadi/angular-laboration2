import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
@Component({
  selector: 'app-logga-in',
  templateUrl: './logga-in.component.html',
  styleUrls: ['./logga-in.component.css']
})
export class LoggaInComponent implements OnInit {
  isLoggdIn: boolean = false;

  //subscribeToObservable(loginStatus: boolean) {
    //this.isLoggdIn = loginStatus;
  //}

  constructor(private communicationService: CommunicationService) { }
  authorized() {
		this.communicationService.sendAuthorization();
  }
  unAuthorized() {
		this.communicationService.sendUnAuthorization();
	}

  ngOnInit(): void {
    this.communicationService.observableSource.subscribe(logstatus => { this.isLoggdIn=logstatus})
			console.log('isLoggdIn', this.isLoggdIn);
		
  }

}
