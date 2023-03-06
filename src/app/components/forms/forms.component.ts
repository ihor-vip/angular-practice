import { Component } from '@angular/core';

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

  save(tref: HTMLFormElement) {
    console.log(tref['username'].value);
    console.log(this.user);
  }
}
