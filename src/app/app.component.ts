import { Component } from '@angular/core';
import { CoursesService } from './app.service';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html' ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email = 'a@gmail.com';
  onKeyUp(){
    console.log(`Enter Pressed  + ${this.email}`);
    
  }
}
