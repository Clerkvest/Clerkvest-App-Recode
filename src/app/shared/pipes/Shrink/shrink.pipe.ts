import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shrink'
})
export class ShrinkPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let str: string = String(value);
    let size: number = Number(args[0]);

    return this.shrinkStr(str, size);
  }

  private shrinkStr(value: string, size: number): string {
    let isLonger: boolean = size > value.length;
    return isLonger ? value : value.substring(0, size) + " ...";
  }
}
