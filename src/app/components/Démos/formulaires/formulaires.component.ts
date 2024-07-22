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

  constructor(private _formBuilder: FormBuilder) {

    // Le formControl va servir à contrôler un input
    // Si, l'input que vous utilisez est seul, de préférence utilisez le ngModel
    this.control = this._formBuilder.control(null, [Validators.required, Validators.minLength(5)])

    this.group = this._formBuilder.group({
      prenom: [null, [Validators.required]],
      age: [null, [Validators.required, Validators.min(18)]],
      tel: ['', [telValidator, Validators.required]],
      competences: this._formBuilder.array([
        this._formBuilder.control(null, [Validators.required]),
        this._formBuilder.control(null, [Validators.required]),
        this._formBuilder.control(null, [Validators.required]),
        // this._formBuilder.group({
        //   titre: [null, [Validators.required]],
        //   description: [null, [Validators.required]]
        // })
      ], { validators: [(array) => {
        if(array.value.length > 3) {
          return { arrayMax: 'max 3 compétences' }
        }
        return null;
      }] }) 
    }, { validators: [(group) => {
      const valueToControl = group.value;
      if(valueToControl.prenom?.length > valueToControl?.age) {
        return { test: 'La longueur de votre prenom doit etre plus petite que votre age' }
      }
      return null
    }] })

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
    return this.group.get('competences') as FormArray;
  }

  addControl() {
    this.getArrayForm().push(this._formBuilder.control(null, [Validators.required]))
    
  }

  onArraySubmit(e: Event) {
    e.preventDefault();

    
  }

}


// control
// 42
// 'khun'
// true

// group
// {
//  nom: 'Khun',
//  prenom: 'Ly',
//  age: 42
//}

// array
// ['c#', 'python', 'SQL']

// [
//  { rue: 'Chaussee de Dinant', numero: 634, type: 'facturation' }, 
// { rue: 'Chaussee au moine', numero: 42, type: 'livraison'}
//]
