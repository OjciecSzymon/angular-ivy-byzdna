import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HomeService } from '../../../app/services/home.service';
import { FormGroup,  FormBuilder,  Validators, NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  active: number = 1;
  access: boolean = false;

  constructor(private homeService: HomeService) { 
    this.homeService.pageActive.subscribe(value => { this.active = value });
    this.homeService.pageAccess.subscribe(value => { this.access = value });
  }

  ngOnInit(): void {
    if (localStorage.getItem('marketingName') == null ||
        localStorage.getItem('marketingName') == '') {
      this.access = false;
    } else if (localStorage.getItem('marketingName') != null || localStorage.getItem('marketingName') != '') {
      this.access = true;
    } 
  }

  changePage(value: number) {
    this.homeService.getActive(value);
  }
}
