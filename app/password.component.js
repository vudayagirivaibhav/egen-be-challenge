"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var common_2 = require('@angular/common');
var password_strength_1 = require('./password_strength');
var PasswordComponent = (function () {
    function PasswordComponent(fb) {
        this.fb = fb;
        this.passwordForm = fb.group({
            password: ['', common_1.Validators.compose([common_1.Validators.required, password_strength_1.passwordValidator, password_strength_1.passwordCharSValidator, password_strength_1.passwordCharCValidator, password_strength_1.passwordSpecialValidator, password_strength_1.passwordLengthValidator])],
        });
    }
    PasswordComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Egen Password Strength Meter</h1>\n\n    \n<form id=\"addUser\" (ngSubmit)=\"passwordForm.valid && onSubmit()\">\n    \n    <div class=\"col-lg-8\" >\n                <div style=\"margin-left:30px;\" class=\"form-group form-group-sm\">\n                    <label for=\"name\">Password</label>\n                    <div style=\"width:100%\">\n                        <input type=\"password\"   class=\"form-control\" placeholder=\"Password\" #password='ngForm' [ngFormControl]=\"passwordForm.controls['password']\">\n                        <div *ngIf=\"password.control.touched || !password.control.hasError('required')\">\n                            <div  *ngIf=\" password.control.hasError('minCapChar') || password.control.hasError('minLen')  || password.control.hasError('minNumber') || password.control.hasError('specialChar')  || password.control.hasError('minSmallChar')\">\n                                <span>\n                                    <ul>\n                                <li  [ngClass]=\"{invalid:password.control.hasError('minLen'), valid:!password.control.hasError('minLen')}\">Password must be at least 8 characters long </li>\n                                <li  [ngClass]=\"{invalid:password.control.hasError('specialChar'), valid:!password.control.hasError('specialChar')}\">Password must contain at least one special character</li>\n                                <li  [ngClass]=\"{invalid:password.control.hasError('minNumber'), valid:!password.control.hasError('minNumber')}\">Password must contain at least one number</li>\n                                <li  [ngClass]=\"{invalid:password.control.hasError('minCapChar'), valid:!password.control.hasError('minCapChar')}\">Password must contain at least one upper case character</li>\n                                <li  [ngClass]=\"{invalid:password.control.hasError('minSmallChar'), valid:!password.control.hasError('minSmallChar')}\">Password must contain at least one lower case character</li>\n                                 </ul>\n                               </span>\n                               <span>\n                               \n                               </span>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n    </div>\n      <div class=\"row\" style=\"margin-left:30px;\">\n                    <span><button type =\"submit\" [disabled]=\"!passwordForm.valid\" >Save</button></span>\n                <div style=\"clear:both\"></div>\n          </div>\n</form>\n     \n     \n     "
        }), 
        __metadata('design:paramtypes', [common_2.FormBuilder])
    ], PasswordComponent);
    return PasswordComponent;
}());
exports.PasswordComponent = PasswordComponent;
//# sourceMappingURL=password.component.js.map