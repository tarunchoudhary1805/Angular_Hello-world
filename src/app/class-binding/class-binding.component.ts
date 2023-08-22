import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
  <h1 class="text-success" [class.text-special]="hasError">Tarun Choudhary</h1>
  <h1 [class]="textSuccess">Tarun Choudhary</h1>
  <h1 [class.text-success]="hasError">Tarun Choudhary</h1>
  <h1  [ngClass]="classExpression">Tarun Choudhary</h1>
  `,
  styles: [`
     
  .text-danger{
    color:red;
  }
  .text-success{
    color:blue;
  }

  
  .text-special{
    font-style:italic;
  }
  `]
})
export class ClassBindingComponent {
  public hasError = true;
     public textSuccess = 'text-success';
    //  public classExpression = "text-special text-success"
    //  public classExpression = ["text-special","text-success","text-danger"]
     public classExpression = {"text-success":!this.hasError,"text-special":this.hasError}
}
