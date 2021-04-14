import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private router: Router) { }

  marketingName = localStorage.getItem('marketingName');
  technicalName = localStorage.getItem('technicalName');
  description = localStorage.getItem('description');
  portal = localStorage.getItem('portal');
  type = localStorage.getItem('type');
  benefit = localStorage.getItem('benefit');
  radio = localStorage.getItem('radio');
  startDate = localStorage.getItem('startDate');
  finishDate = localStorage.getItem('finishDate');
  otherPromotions = localStorage.getItem('otherPromotions');
  backPromotion = localStorage.getItem('backPromotion');

  messagesStatus:boolean = false;

  ngOnInit(): void {
  }

  goToGrid() {
    let checkVariables = false;
    let myVaribles = [
      {
        name: 'marketingName',
        value: this.marketingName
      },
      {
        name: 'portal',
        value: this.portal
      }, 
      {
        name: 'type',
        value: this.type
      },
      {
        name: 'startDate',
        value: this.startDate
      }
    ];
    for (const el of myVaribles) {
      if (el.value != '' && el.value != null && el.value != 'null') {
        this.messagesStatus = false;
        checkVariables = true;
      } else {
        checkVariables = false
        this.messagesStatus = true;
        break;
      }
    }
    
    if (checkVariables) {
      this.router.navigate(['grid']);
    }
  }

}
