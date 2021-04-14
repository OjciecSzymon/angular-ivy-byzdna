import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface gridModel {
  marketingName: any;
  edit: string;
  remove: string;
}

const gridData: gridModel[] = [
  {marketingName: localStorage.getItem('marketingName'), edit: 'edit', remove: 'remove'}
];

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  displayedColumns: string[] = ['marketingName', 'edit', 'remove'];
  dataSource = gridData;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  clearLocalStorage() {
    localStorage.clear();
    this.router.navigate(['home']);
  }

}
