import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export class CS {
  cs(...classes: ClassValue[]) {
    const ret = twMerge(clsx(classes));
    return ret;
  }
}
