import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[alphaNumericOnly]'
})
export class AlphaNumericOnlyDirective {
  private inputElement: HTMLElement;

  private _regexOnlyCaractesApha: any = /^([a-zA-Z]\s)/ig
  constructor(
    private elementRef: ElementRef
  ) {
    this.inputElement = elementRef.nativeElement;
   }

  @HostListener('keydown', ['$event'])
  onkeydown(e: KeyboardEvent) {
    // key code numbers
    if(e.keyCode >= 40 &&
      e.keyCode <= 57 ) 
        e.preventDefault();
      
    return;
  }
  @HostListener('paste', ['$event'])
  onPaste(e: ClipboardEvent){
    event.preventDefault();
    const pastedInput: string = e.clipboardData
      .getData('text/plain')
      .replace(/[0-9]/g, ''); 
    document.execCommand('insertText', false, pastedInput);
  }

}
