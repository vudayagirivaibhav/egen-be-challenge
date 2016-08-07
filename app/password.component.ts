import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FORM_DIRECTIVES, Control, Validators, ControlArray} from '@angular/common';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Router, RouterLink, RouteParams, RouteData} from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FormBuilder, ControlGroup } from '@angular/common';
import {passwordLengthValidator, passwordSpecialValidator, passwordCharSValidator, passwordCharCValidator, passwordValidator } from './password_strength';

@Component({
    selector: 'my-app',
    template: `<h1>Egen Password Strength Meter</h1>

    
<form id="addUser" (ngSubmit)="passwordForm.valid && onSubmit()">
    
    <div class="col-lg-8" >
                <div style="margin-left:30px;" class="form-group form-group-sm">
                    <label for="name">Password</label>
                    <div style="width:100%">
                        <input type="password"   class="form-control" placeholder="Password" #password='ngForm' [ngFormControl]="passwordForm.controls['password']">
                        <div *ngIf="password.control.touched || !password.control.hasError('required')">
                            <div  *ngIf=" password.control.hasError('minCapChar') || password.control.hasError('minLen')  || password.control.hasError('minNumber') || password.control.hasError('specialChar')  || password.control.hasError('minSmallChar')">
                                <span>
                                    <ul>
                                <li  [ngClass]="{invalid:password.control.hasError('minLen'), valid:!password.control.hasError('minLen')}">Password must be at least 8 characters long </li>
                                <li  [ngClass]="{invalid:password.control.hasError('specialChar'), valid:!password.control.hasError('specialChar')}">Password must contain at least one special character</li>
                                <li  [ngClass]="{invalid:password.control.hasError('minNumber'), valid:!password.control.hasError('minNumber')}">Password must contain at least one number</li>
                                <li  [ngClass]="{invalid:password.control.hasError('minCapChar'), valid:!password.control.hasError('minCapChar')}">Password must contain at least one upper case character</li>
                                <li  [ngClass]="{invalid:password.control.hasError('minSmallChar'), valid:!password.control.hasError('minSmallChar')}">Password must contain at least one lower case character</li>
                                 </ul>
                               </span>
                               <span>
                               
                               </span>
                            </div>

                        </div>
                    </div>
                </div>
    </div>
      <div class="row" style="margin-left:30px;">
                    <span><button type ="submit" [disabled]="!passwordForm.valid" >Save</button></span>
                <div style="clear:both"></div>
          </div>
</form>
     
     
     `
})
export class PasswordComponent {
    passwordForm: ControlGroup;

    constructor(private fb: FormBuilder) {
        this.passwordForm = fb.group({
            password: ['', Validators.compose([Validators.required, passwordValidator, passwordCharSValidator, passwordCharCValidator, passwordSpecialValidator, passwordLengthValidator])],
        })
    }


}




