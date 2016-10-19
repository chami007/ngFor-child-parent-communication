import { Component } from '@angular/core';
import { HEROES } from './mock-hero';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: []
})
export class ParentComponent {
  heroes = HEROES;
  master: string = 'Master';
  parentToChild: boolean = false;

  triggerAllChilComponents(data) {
    this.parentToChild = !this.parentToChild;
  }

}
