import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-else-directive',
  templateUrl: './ng-if-else-directive.component.html',
  styleUrls: ['./ng-if-else-directive.component.scss']
})
export class NgIfElseDirectiveComponent implements OnInit {

  toggle = false;
  constructor() { }

  ngOnInit(): void {
  }

}
