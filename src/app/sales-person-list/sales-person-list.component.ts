import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
  
  // create an array of objects
  salesPersonList: SalesPerson[] = [
  new SalesPerson("Kyle", "Vance", "kvance@gmail.com", 100000),
  new SalesPerson("John", "Doe", "jd@gmail.com", 200000),
  new SalesPerson("Sarah", "Smith", "missthing@gmail.com", 900000),
  new SalesPerson("Michelle", "Johnson", "mj123@gmail.com", 300000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
