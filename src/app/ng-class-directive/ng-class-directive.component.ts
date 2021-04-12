import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-directive',
  templateUrl: './ng-class-directive.component.html',
  styleUrls: ['./ng-class-directive.component.scss']
})
export class NgClassDirectiveComponent implements OnInit {
  backgroundToggle = false;
  constructor() { }

  ngOnInit(): void {
  }

}
