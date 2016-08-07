"use strict";
exports.temp = 0;
function passwordValidator(control) {
    var pass = control.value;
    if (!pass.match(/[0-9]/)) {
        return { minNumber: true, count: 1 };
    }
}
exports.passwordValidator = passwordValidator;
function passwordLengthValidator(control) {
    var pass = control.value;
    if (!(pass.length >= 8)) {
        return { minLen: true, count: 2 };
    }
}
exports.passwordLengthValidator = passwordLengthValidator;
function passwordSpecialValidator(control) {
    var pass = control.value;
    if (!pass.match(/[!,%,&,@,#,$,^,*,?,_,~]/)) {
        return { specialChar: true, count: 3 };
    }
}
exports.passwordSpecialValidator = passwordSpecialValidator;
function passwordCharCValidator(control) {
    var pass = control.value;
    if (!pass.match(/[A-Z]/)) {
        return { minCapChar: true, count: 4 };
    }
}
exports.passwordCharCValidator = passwordCharCValidator;
function passwordCharSValidator(control) {
    var pass = control.value;
    if (!pass.match(/[a-z]/)) {
        return { minSmallChar: true, count: 5 };
    }
}
exports.passwordCharSValidator = passwordCharSValidator;
//# sourceMappingURL=password_strength.js.map