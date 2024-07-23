import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
    static minAge(age: number): ValidatorFn {
        return (control: AbstractControl) => {

            if(!control.value) {
                return null;
            }

            const today = new Date();

            // copier la date encodée
            let date = new Date((<Date>control.value).toISOString());
            
            let ageEncoded = today.getFullYear() 
                - date.getFullYear();

            date.setFullYear(today.getFullYear())

            if(date > today) {
                ageEncoded--;
            }

            if(ageEncoded < age) {
                return { minAge: 'Trop jeune' }
            }

            return null;
        }
    }
}
