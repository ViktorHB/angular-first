import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  templateUrl: './ng-for-directive.component.html',
  styleUrls: ['./ng-for-directive.component.scss']
})
export class NgForDirectiveComponent implements OnInit {
 arr: number[] = [1,1,2,3,5,8,13]
  objs = [
    {title: 'post1', autor: 'Viktor', comments:[
      {name: 'Max', text: 'Lorem 1'},
      {name: 'Ira', text: 'Lorem 2'},
      {name: 'Natali', text: 'Lorem 3'}
    ]},
    {title: 'post2', autor: 'Jonh', comments:[
        {name: 'Dima', text: 'Lorem 1'},
        {name: 'Xena', text: 'Lorem 2'},
        {name: 'Tor', text: 'Lorem 3'}
      ]},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
