import {Component} from '@angular/core'

@Component({
  selector: 'app-post2',
  template: `
    <div class="post2">
     <h2>post2</h2>
      <p><i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur molestias nesciunt velit?</i></p>
  </div>`,
  styles:[`
  .post2{
    padding: 1rem;
    border: 2px solid black;
  }

  h2{
    font-size: 4rem;
  }
  `]
})

export class Post2Component {}
