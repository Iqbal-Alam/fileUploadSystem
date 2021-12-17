import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: '.exe', symbol: 'H'},
  {position: 2, name: 'Helium', weight: '.exe', symbol: 'He'},
  {position: 3, name: 'Lithium', weight: '.exe', symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: '.exe', symbol: 'Be'},
  {position: 5, name: 'Boron', weight: '.exe', symbol: 'B'},
  {position: 6, name: 'Carbon', weight: '.exe', symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: '.exe', symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: '.exe', symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: '.exe', symbol: 'F'},
  {position: 10, name: 'Neon', weight: '.exe', symbol: 'Ne'},
];


@Component({
  selector: 'file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }



}
