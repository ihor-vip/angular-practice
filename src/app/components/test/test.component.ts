import { Component, OnInit } from '@angular/core';
import {IncrementPipe} from "../../pipes";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  arr2:number[];

  user = {
    name: 'max',
    age: 18
  }
   name ='kokos'

  now = new Date()
  arr = [1,2,3,4,5]

  constructor(private incrementPipe: IncrementPipe) {
  }

  ngOnInit() {
    this.arr2 = this.incrementPipe.transform(this.arr, 10)
  }
}
