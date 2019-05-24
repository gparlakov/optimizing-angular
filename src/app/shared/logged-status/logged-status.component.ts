import { Component, OnInit } from '@angular/core';
import { LoggedStatusService } from './logged-status.service';

@Component({
  selector: 'app-logged-status',
  templateUrl: './logged-status.component.html',
  styleUrls: ['./logged-status.component.css']
})
export class LoggedStatusComponent implements OnInit {

  constructor(public loggedService: LoggedStatusService) { }

  ngOnInit() {
  }

}
