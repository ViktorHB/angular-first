import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-directive',
  templateUrl: './ng-style-directive.component.html',
  styleUrls: ['./ng-style-directive.component.scss']
})
export class NgStyleDirectiveComponent implements OnInit {
  backgroundToggle = false;

  constructor() { }

  ngOnInit(): void {
  }
}

