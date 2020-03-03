import { Component, ContentChild, ContentChildren, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { AutocompleteContent } from './autocomplete-content';
import { Option } from './option/option';
import { switchMap } from 'rxjs/operators';
import { merge } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  template: `
    <ng-template #root>
      <div class="autocomplete">
        <ng-container *ngTemplateOutlet="content.tpl"></ng-container>
      </div>
    </ng-template>
  `,
  exportAs: 'appAutocomplete',
  styleUrls: ['./autocomplete.css']
})
export class Autocomplete {
  @ViewChild('root', { static: true}) rootTemplate: TemplateRef<any>;

  @ContentChild(AutocompleteContent, {static: true})
  content: AutocompleteContent;

  @ContentChildren(Option) options: QueryList<Option>;

  optionsClick() {
    return this.options.changes.pipe(
      switchMap(options => {
        const clicks$ = options.map(option => option.click$);
        return merge(...clicks$);
      })
    );
  }
}
