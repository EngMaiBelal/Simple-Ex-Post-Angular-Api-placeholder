import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-default',
  templateUrl: './animation-default.component.html',
  styleUrls: ['./animation-default.component.css'],

  // animations 
// import { animate, state, style, transition, trigger } from '@angular/animations';

  animations:[
    trigger('divState',[
      state('normal',style({
        'background-color':'blue',
        transform:'translateX(0)'
      })),
      state('highlighted',style({
        'background-color':'red',
        transform:'translateX(300px)'
      })),
      transition('normal => highlighted' , animate(300)),
      transition('highlighted => normal' , animate(300))
    ])
  ]

})
export class AnimationDefaultComponent implements OnInit {
  state="normal"

  constructor() { }
  onAnimate(){
    this.state == 'normal'? 
    this.state="highlighted":  // case1 -->true
    this.state="normal"        // case2 -->false
  }



  ngOnInit(): void {
  }

}
