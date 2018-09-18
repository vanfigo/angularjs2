import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  form: FormGroup;

  user: any = {
    completeName: {
      name: "Rodrigo",
      lastName: "Loyola",
    },
    email: "rloyolaj@gmail.com",
    hobbies: ['Run', 'Sleep', 'Eat']
  };

  constructor() {

    this.form = new FormGroup({
      'completeName': new FormGroup({
        'name': new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        'lastName': new FormControl('', [
          Validators.required,
          this.noLoyola
        ])
      }),
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]),
      'hobbies': new FormArray([
        new FormControl('', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.userExists),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    });
    // this.form.setValue(this.user);
    this.form.controls['password2'].setValidators([
      Validators.required,
      this.notEqual
    ]);

    this.form.controls['username'].valueChanges
      .subscribe(data => {
        console.log(data);
    });
    this.form.statusChanges
      .subscribe(status => {
        console.log(status);
    });
  }

  addHobbie = (hobbie: FormControl) => {
    console.log(hobbie);
    (<FormArray>this.form.controls['hobbies']).push(
      new FormControl('', Validators.required)
    )
  };

  noLoyola = (control: FormControl): {[s:string]:boolean} => {
    if( control.value === 'loyola' ) {
      return {'noloyola': true};
    }
    return null;
  };

  notEqual = (control: FormControl): {[s:string]:boolean} => {
    if( control.value !== this.form.controls['password1'].value ) {
      return {'notequal': true};
    }
    return null;
  };

  userExists = (control: FormControl): Promise<any>|Observable<any> => {
    let promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          if(control.value === 'vanfigo')
            resolve({exists:true})
          else
            resolve(null)
        }, 3000)
      }
    );
    return promise;
  };

  save = () => {
    console.log("value", this.form.value);
    console.log("form", this.form);
    // this.form.reset();
  };

}
