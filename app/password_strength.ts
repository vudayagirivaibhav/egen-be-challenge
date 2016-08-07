import { Control, ControlGroup } from "@angular/common";

export var temp =0;

export function passwordValidator(control: Control): { [key: string]: any } {
  var pass: string = control.value;
  if (!pass.match(/[0-9]/)) {
    return { minNumber: true , count:1 };
  }
}

export function passwordLengthValidator(control: Control): { [key: string]: any } {
  var pass: string = control.value;
  if (!(pass.length >= 8)) {
    return { minLen: true , count:2};
  }
}

export function passwordSpecialValidator(control: Control): { [key: string]: any } {
  var pass: string = control.value;
  if (!pass.match(/[!,%,&,@,#,$,^,*,?,_,~]/)) {
        return { specialChar: true ,count:3};
  }
}

export function passwordCharCValidator(control: Control): { [key: string]: any } {
  var pass: string = control.value;
  if (!pass.match(/[A-Z]/)) {
    return { minCapChar: true , count:4 };
  }
}

export function passwordCharSValidator(control: Control): { [key: string]: any } {
  var pass: string = control.value;
  if (!pass.match(/[a-z]/)) {
    
    return { minSmallChar: true, count:5 };
  }
}

