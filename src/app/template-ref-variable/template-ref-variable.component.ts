import { Component } from '@angular/core';

@Component({
  selector: 'app-template-ref-variable',
  templateUrl: './template-ref-variable.component.html',
  styleUrls: ['./template-ref-variable.component.css']
})
export class TemplateRefVariableComponent {

  onClick(value:string){
    console.log(value);
    
  }
}
