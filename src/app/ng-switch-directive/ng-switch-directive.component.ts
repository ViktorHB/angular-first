import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-directive',
  templateUrl: './ng-switch-directive.component.html',
  styleUrls: ['./ng-switch-directive.component.scss']
})
export class NgSwitchDirectiveComponent implements OnInit {
  toggle: any = false;
  constructor() { }

  ngOnInit(): void {
  }

}
