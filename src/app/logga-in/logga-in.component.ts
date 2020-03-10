import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
@Component({
  selector: 'app-logga-in',
  templateUrl: './logga-in.component.html',
  styleUrls: ['./logga-in.component.css']
})
export class LoggaInComponent implements OnInit {

  constructor(private communicationService: CommunicationService) { }
  authorized() {
		this.communicationService.send();
	}

  ngOnInit(): void {
  }

}
