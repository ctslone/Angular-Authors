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
    
    // loop through all the words and if a prep is found, only after the first word, make sure it is lower case. otherwide capitalize the first letter of all other words
    for (var i=0; i<words.length; i++) {
      if (i > 0 && this.isPrep(words[i])) {
        words[i] = words[i].toLowerCase()
      }
      else {
        words[i] = this.notPrep(words[i])
      }
    }
    // return the result to the user
    return words.join(' ')
  }

  private isPrep(word) {
    let preps = ["the", "or", "an", "and", "of"];
    return preps.includes( word.toLowerCase() )
  }

  private notPrep(word) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
  }

}
