import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent {

  @Input() hero: Hero;
  @Input('master') masterName: string;
  @Input() parentToChild:boolean;
  @Output("parentcall") callParent = new EventEmitter();

  isHide: boolean = true;

  onClick() {
    this.isHide = !this.isHide;
    this.callParent.emit("setParentVariable");
    if(!this.isHide){
      console.log('works');
    }
  }

}
