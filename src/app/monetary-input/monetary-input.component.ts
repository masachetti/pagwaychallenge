import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CS } from 'src/utils/cs';

@Component({
  selector: 'app-monetary-input',
  templateUrl: './monetary-input.component.html',
  styleUrls: ['./monetary-input.component.css'],
})
export class MonetaryInputComponent extends CS implements OnInit {
  @Input() className = '';
  @Input() name = '';

  @ViewChild('inputRef', { read: ElementRef }) inputRef:
    | ElementRef<HTMLInputElement>
    | undefined;

  editingValue = false;

  _value = 0.0;
  set value(newValue: string) {
    console.log(newValue);
    this._value = parseFloat(newValue) || 0.0;
  }
  get value() {
    return '' + this._value;
  }

  constructor() {
    super();
  }

  ngOnInit(): void {}

  changeFocus() {
    this.editingValue = true;
    setTimeout(() => {
      this.inputRef!.nativeElement.focus();
    });
  }

  removeFocus() {
    this.editingValue = false;
  }
}
