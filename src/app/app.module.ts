import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateRefVariableComponent } from './template-ref-variable/template-ref-variable.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { NgIfDirectiveComponent } from './structuralDirectives/ng-if-directive/ng-if-directive.component';
import { NgSwitchDirectiveComponent } from './structuralDirectives/ng-switch-directive/ng-switch-directive.component';
import { NgForDirectiveComponent } from './structuralDirectives/ng-for-directive/ng-for-directive.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { TestComponent } from './test/test.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesLearnComponent } from './services-learn/services-learn.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
 

@NgModule({
  declarations: [
    AppComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateRefVariableComponent,
    TwoWayBindingComponent,
    NgIfDirectiveComponent,
    NgSwitchDirectiveComponent,
    NgForDirectiveComponent,
    ComponentInteractionComponent,
    TestComponent,
    PipesComponent,
    ServicesLearnComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [

    EmployeeService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
