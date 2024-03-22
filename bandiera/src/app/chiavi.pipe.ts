import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chiavi'
})
export class ChiaviPipe implements PipeTransform {

  chiaviArray : string[]=[];

  transform(value: any[]): string[] {
    for(const key in value) {
      console.log(key);
      this.chiaviArray.push(key);;
    }
    console.log(this.chiaviArray);
    return this.chiaviArray; 
  }
}
