
import {AbstractControl } from '@angular/forms'

export function checkName(control: AbstractControl){

    if(control.value != undefined){
      let nome = control.value.trim();
      nome = nome.replace(/\D/ig, "");
      console.log(nome);
      return null
    }
}
  