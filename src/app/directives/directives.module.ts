
import {NgModule} from '@angular/core';
import { AlphaNumericOnlyDirective } from './alpha-numeric.directive';

@NgModule({
    exports: [AlphaNumericOnlyDirective]
    ,declarations:[AlphaNumericOnlyDirective]
})
export class DirectiveModule{}