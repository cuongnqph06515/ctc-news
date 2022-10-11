import { AbstractControl, ValidatorFn } from "@angular/forms";

export function NoWhiteSpaceFn(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any }| null => {
        let controlVal = control.value;
        if (typeof controlVal === 'number') {
            controlVal = controlVal.toString();
        }
        let isWhite = true;
        var isValid;
        if (controlVal.length === 0) {
            isValid = isWhite;
        } else {
            isWhite = (controlVal || "").toString().trim().length === 0;
            isValid = !isWhite;
        }
        // let isWhitespace = (controlVal || '').trim().length === 0;
        // let isValid = !isWhitespace;
        return isValid ? null : { whitespace: 'value is only whitespace' };
    }
}