import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { clsx as clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  @Input() class = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  cs(...classes: string[]) {
    console.log(classes)
    const ret = twMerge(clsx(classes))
    console.log(ret)
    return ret
  }

  ola() {
    console.log('Ola mundo')
  }
}
