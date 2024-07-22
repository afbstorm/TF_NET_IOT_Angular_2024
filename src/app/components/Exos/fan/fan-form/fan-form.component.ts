import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FieldsetModule } from 'primeng/fieldset';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormErrorComponent } from "../../../form-error/form-error.component";
import { CustomValidators } from '../../../../validators/custom.validators';

@Component({
  selector: 'app-fan-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ButtonModule, FieldsetModule, InputTextModule, CalendarModule, FloatLabelModule, FormErrorComponent],
  templateUrl: './fan-form.component.html',
  styleUrl: './fan-form.component.css'
})
export class FanFormComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      // ancienne manière d'ecrire
      // nom: this.formBuilder.control([null, [Validator.required]]),
      nom: [null, [Validators.required, Validators.minLength(2)]],
      prenom: [null, [Validators.required]],
      dateDeNaissance: [new Date(), [Validators.required, CustomValidators.minAge(13)]],


      // gestion du formArray
      series: this.formBuilder.array([], {
        validators: [(control) => {
          if(!control.value) {
            return null;
          }
          if(control.value.length < 3) {
            return { arrayMin: 'Pas suffisament de séries' }
          }
          return null;
        }]
      })
    })

    this.addSerie();
  }

  getSeries() {
    return <FormArray>this.form.controls['series']
  }

  getControl(i: number) {
    return (<FormGroup>(this.getSeries().controls[i])).controls['nomSerie']
  }

  addSerie() {
    this.getSeries().push(this.formBuilder.group({
      nomSerie: [null, [Validators.required]],
      favori: []
    }))
  }

  submit() {
    console.log(this.form.value)
  }
}
