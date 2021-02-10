import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import 'moment-duration-format';

interface User {
  userName: String;
  name: string;
  area: string;
  population: number;
}
const USERS: User[] = [
  {
    userName: 'Vakling Draganov',
    name: 'Role 1',
    area: 'active',
    population: 146989754,
  },
  {
    userName: 'Steven J.Davis',
    name: 'Role 2',
    area: 'active',
    population: 366241.99,
  },
  {
    userName: 'Lorenz Döring',
    name: 'Role 3',
    area: 'inactive',
    population: 3244594.63,
  },
  {
    userName: 'Steven J.Davis',
    name: 'Role 4',
    area: 'inactive',
    population: 14095173.97,
  },
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  users = USERS;
  page = 1;
  pageSize = 4;
  collectionSize = USERS.length;
  countries: User[];

  constructor() {
    this.refreshCountries();
  }

  refreshCountries() {
    this.countries = USERS.map((country, i) => ({
      id: i + 1,
      ...country,
    })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
  calculate(o:number){
    var s = moment.duration(o, "days").format();
    return s;
  }

  ngOnInit(): void {}
}
