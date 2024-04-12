import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CS } from 'src/utils/cs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent extends CS implements OnInit {
  @Input() class = '';
  @Output() click = new EventEmitter();

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
