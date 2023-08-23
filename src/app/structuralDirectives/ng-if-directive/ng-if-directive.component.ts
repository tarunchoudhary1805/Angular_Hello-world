import { Component } from '@angular/core';

// @Component({
//   selector: 'app-ng-if-directive',
//   template: `
//   <div *ngIf="displayName; else elseBlock">
//     <h2>CodeVolution</h2>
//   </div>

//   <ng-template #elseBlock>
// <h2>Hidden</h2>
//   </ng-template>
//   `,
//   styleUrls: ['./ng-if-directive.component.css']
// })

@Component({
  selector: 'app-ng-if-directive',
  template: `
  <div *ngIf="displayName; then thenBlock ; else elseBlock">
    
  </div>

  <ng-template #thenBlock>
<h2>CodeVolution</h2>
  </ng-template>

  <ng-template #elseBlock>
<h2>Hidden</h2>
  </ng-template>
  `,
  styleUrls: ['./ng-if-directive.component.css']
})
export class NgIfDirectiveComponent {
   public displayName = false;
}
