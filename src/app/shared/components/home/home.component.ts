import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private formSubmitAttempt: boolean;
  forma: FormGroup;

  constructor(private fb: FormBuilder, private validadores: ValidatorsService) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  saveForm() {
    this.formSubmitAttempt = true;
    console.log(this.forma);
  }

  isFieldValid(field: string) {
    return (!this.forma.get(field).valid && this.forma.get(field).touched) ||
      (this.forma.get(field).untouched && this.formSubmitAttempt);
  }

  createForm() {
    //lleno
    // this.forma = this.fb.group({
    //   nombre: ['Horse', [Validators.required, Validators.minLength(3)]],
    //   apellido: ['Luis', Validators.required],
    //   dni: ['3423434343F', Validators.required],
    //   telefono: ['13243443', Validators.required],
    //   email: ['horse@luis.com', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")], this.validadores.emailForbiddenAsinc],
    //   direccion: this.fb.group({
    //     calle: ['Plaza España', Validators.required],
    //     numero: ['4', Validators.required],
    //     ciudad: ['Madrid', Validators.required]
    //   }),
    //   asignaturas: this.fb.array([
    //     // ['uno'], ['dos'], ['tres']
    //   ])
    // });

    //vacio
    this.forma = this.fb.group({
      nombre: ['Horse', [Validators.required, Validators.minLength(3)]],
      apellido: ['Luis', Validators.required],
      dni: ['3423434343F', Validators.required],
      telefono: ['13243443', Validators.required],
      email: ['horse@luis.com', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")], this.validadores.emailForbiddenAsinc],
      direccion: this.fb.group({
        calle: ['Plaza España', Validators.required],
        numero: ['4', Validators.required],
        ciudad: ['Madrid', Validators.required]
      }),
      asignaturas: this.fb.array([
        // ['uno'], ['dos'], ['tres']
      ])
    });
  }

  get asignaturas(): FormArray {
    return this.forma.get('asignaturas') as FormArray;
  }

  addAsignatura(): void {
    this.asignaturas.push(this.fb.control('', Validators.required));
  }

  deleteAsignatura(id: number) {
    this.asignaturas.removeAt(id);
  }

}
