import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'discipline',
  pure: false
})
export class DisciplinePipe implements PipeTransform {
  none: string = "None found";

  transform(input: Member[], desiredDiscipline) {
    var output: Member[] = [];
    if (desiredDiscipline === "aerial silks" || desiredDiscipline === "silks") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].disciplines.indexOf("aerial silks") >= 0 || input[i].disciplines.indexOf("silks") >= 0) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDiscipline === "aerial hoop" || desiredDiscipline === "hoop") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].disciplines.indexOf("aerial hoop") >= 0 || input[i].disciplines.indexOf("hoop") >= 0 || input[i].disciplines.indexOf("lyra") >= 0) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDiscipline === "static trapeze" || desiredDiscipline === "trapeze") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].disciplines.indexOf("static trapeze") >= 0) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDiscipline === "dance trapeze" || desiredDiscipline === "trapeze") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].disciplines.indexOf("dance trapeze") >= 0) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDiscipline === "aerial straps" || desiredDiscipline === "straps") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].disciplines.indexOf("aerial straps") >= 0 || input[i].disciplines.indexOf("straps") >= 0) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDiscipline === "contortion") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].disciplines.indexOf("contortion") >= 0) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
