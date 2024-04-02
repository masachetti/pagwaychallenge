import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CS } from 'src/utils/cs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent extends CS implements OnInit {
  @Input() class = '';

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
