import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { telValidator } from './tel.validator';

@Component({
  selector: 'app-formulaires',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, InputNumberModule, ButtonModule],
  templateUrl: './formulaires.component.html',
  styleUrl: './formulaires.component.css'
})
export class FormulairesComponent {

  control: FormControl;
  group: FormGroup;
  array: FormGroup;

  constructor(private _formBuilder: FormBuilder) {

    // Le formControl va servir à contrôler un input
    // Si, l'input que vous utilisez est seul, de préférence utilisez le ngModel
    this.control = this._formBuilder.control(null, [Validators.required, Validators.minLength(5)])

    this.group = this._formBuilder.group({
      prenom: [null, [Validators.required]],
      age: [null, [Validators.required, Validators.min(18)]],
      tel: ['', [telValidator(), Validators.required]]
    })

    this.array = this._formBuilder.group({
      arrayDansForm: this._formBuilder.array([
        this._formBuilder.control(null, [Validators.required])
        // this._formBuilder.group({
        //   titre: [null, [Validators.required]],
        //   description: [null, [Validators.required]]
        // })
      ]) 
    })

  }

  // Méthode associée au formControl 
  onControlSubmit(e: Event) {
    e.preventDefault();
    if (this.control.valid) {
      console.log(this.control.value);
    } else {
      console.log('Pas valide');
    }
  }

  // Méthode associée au formGroup déclenchée par un événement de type clic
  onGroupSubmit(e: Event) {
    e.preventDefault();
    if (this.group.valid) {
      console.log(this.group.value);
    } else {
      console.log('Pas valide');
      
    }
  }

  // Méthode de récupération du tableau de formControl
  // Le type de retour de la méthode DOIT être FormArray
  // On cible le formGroup et on utilise la fonction .get() en indiquant le nom du formArray
  // Sans oublier de spécifier l'aliasing " as FormArray "
  getArrayForm(): FormArray {
    return this.array.get('arrayDansForm') as FormArray;
  }

  addControl() {
    this.getArrayForm().push(this._formBuilder.control(null, [Validators.required]))
  }

  onArraySubmit(e: Event) {
    e.preventDefault();
    const values = this.array.controls['arrayDansForm'].value;
    if (this.array.valid) {
      console.log(values);
    } else {
      console.log('Pas valide');
      
    }
    
  }

}
