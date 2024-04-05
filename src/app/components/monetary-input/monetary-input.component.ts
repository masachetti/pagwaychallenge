import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CS } from 'src/utils/cs';

@Component({
  selector: 'app-monetary-input',
  templateUrl: './monetary-input.component.html',
  styleUrls: ['./monetary-input.component.css'],
})
export class MonetaryInputComponent extends CS implements OnInit {
  @Input() className = '';
  @Input() name = '';
  @Input() fControl: FormControl = new FormControl();

  @ViewChild('inputRef', { read: ElementRef }) inputRef:
    | ElementRef<HTMLInputElement>
    | undefined;

  editingValue = false;

  get value() {
    return '' + this.fControl.value;
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
