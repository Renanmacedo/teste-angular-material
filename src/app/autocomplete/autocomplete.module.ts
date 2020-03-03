import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Autocomplete } from './autocomplete';
import { AutocompleteTrigger } from './autocomplete-trigger';
import { AutocompleteContent } from './autocomplete-content';
import { Option } from './option/option';

const publicApi = [
  Autocomplete,
  AutocompleteTrigger,
  AutocompleteContent,
  Option
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [publicApi],
  exports: [publicApi]
})
export class AutocompleteModule {
}
