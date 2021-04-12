import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
  title = 'dynamic title'
  number = 53
  arr  = [1,2,3]
  obj = {a:1, b:{c:2}}

  img = 'https://www.iconninja.com/files/332/243/605/react-js-react-logo-js-icon.png'

  inputValue =''
  twoWay = 'Initial'
  constructor() {
    setTimeout(()=>{
      console.log('timeout is over')
      this.img = 'https://www.iconninja.com/files/377/85/167/coding-development-logo-web-javascript-front-end-angular-icon.png'
    }, 3000)
  }

  ngOnInit(): void {
  }

  onInputTwoWay(event : any){
    this.twoWay = event.target.value
  }
  onInput( event? : KeyboardEvent ){
    console.log('Event', event)
    this.inputValue = (<HTMLInputElement>event.target).value
  }

  onClick(){
    console.log('click')
  }

  onBlur(str : string){
    this.inputValue = str
  }

}
