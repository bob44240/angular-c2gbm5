import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DisableControlDirective } from './disable.directive';
import { ChildComponentComponent } from './child-component/child-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent,ChildComponentComponent,DisableControlDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
