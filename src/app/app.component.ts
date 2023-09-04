import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-homes';
  name = "root";
  age = 22;
  arr = ['one', 'two', 'three']
  person = {
    name: 'root',
    age: 23
  }
  hello(){
    console.log("hello");
  }
  siteUrl = window.location.href;

  getName(data: string){
    alert(data);
  }
  showData(){
    alert(`${this.title} ${this.name}  ${this.arr[0]}  ${this.person.name}`);
  }
}

