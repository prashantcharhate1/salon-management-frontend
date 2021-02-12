import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

//@Directive is added as it is a directive 
@Directive({
    selector: '[appConfirmPassEqualValidator]',
    providers:
        [{
            provide: NG_VALIDATORS,
            useExisting: ConfirmPassEqualValidatorDirective,
            multi: true
        }]
})
export class ConfirmPassEqualValidatorDirective implements Validator {
    @Input() appConfirmPassEqualValidator: string
    validate(control: AbstractControl): { [key: string]: any } | null {
        const controlToCompare = control.parent.get(this.appConfirmPassEqualValidator);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    }
}