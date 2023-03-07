import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  user = {
    name: 'max',
    age: 18
  }
   name ='kokos'

  now = new Date()
  arr = [1,2,3,4,5]

}
