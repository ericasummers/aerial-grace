import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'discipline',
  pure: false
})
export class DisciplinePipe implements PipeTransform {

  transform(input: Member[], desiredDiscipline) {
    var output: Member[] = [];
    if (desiredDiscipline === "aerial silks") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].disciplines === "aerial silks") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDiscipline === "aerial hoop") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].disciplines === "aerial hoop") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDiscipline === "static trapeze") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].disciplines === "static trapeze") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDiscipline === "dance trapeze") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].disciplines === "dance trapeze") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDiscipline === "aerial straps") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].disciplines === "aerial straps") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDiscipline === "contortion") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].disciplines === "contortion") {
          output.push(input[i]);
        }
      }
      return output;
    }else if (desiredDiscipline === "miscellaneous") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].disciplines !="contortion" && input[i].disciplines !="aerial silks" && input[i].disciplines !="aerial straps" && input[i].disciplines !="dance trapeze" && input[i].disciplines !="static trapeze" && input[i].disciplines !="aerial hoop" && input[i].disciplines !="all") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
