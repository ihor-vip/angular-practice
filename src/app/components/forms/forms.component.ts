import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
    user = {
      username: 'max',
      password: 111
    }

    myForm: FormGroup;

    ngOnInit(): void {
      this.myForm = new FormGroup({
        // name: new FormControl('', [Validators.required, Validators.minLength(7)]),
        name: new FormControl('', [Validators.minLength(7)]),
        age: new FormControl(10)
      })
    }

  save(tref: HTMLFormElement) {
    console.log(tref['username'].value);
    console.log(this.user);
  }

  save2() {
    console.log(this.myForm);
    console.log(this.myForm.controls['age'].value);
    console.log(this.myForm.getRawValue());
  }
}
