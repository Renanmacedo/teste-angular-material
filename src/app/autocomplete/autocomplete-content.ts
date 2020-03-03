import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appAutocompleteContent]'
})
export class AutocompleteContent {
  constructor( public tpl: TemplateRef<any> ) {
  }
}
