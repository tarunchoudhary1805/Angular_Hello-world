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
    ComponentInteractionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
