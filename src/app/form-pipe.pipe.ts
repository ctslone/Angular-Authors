import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formPipe'
})
export class FormPipePipe implements PipeTransform {

  transform(value: string) {
    if (!value) {
      return null;
    }
    // separating all words with a space
    let words = value.split(' ');
    let preps = ["the", "or", "an", "and", "of"];
    // loop through all the words and if a prep is found, only after the first word, make sure it is lower case. otherwide capitalize the first letter of all other words
    for (var i=0; i<words.length; i++) {
      if (i > 0 && preps.includes( words[i].toLowerCase() )) {
        words[i] = words[i].toLowerCase()
      }
      else {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase()
      }
    }
    // return the result to the user
    return words.join(' ')
  }

}
