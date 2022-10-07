import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChildComponentComponent } from './child-component/child-component.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  editMode=false

  @ViewChild(ChildComponentComponent,{static:false}) childComponent: ChildComponentComponent;

  parentForm = new FormGroup({
    id: new FormControl({value: 'id', disabled: true}),
    name: new FormControl({value: 'name', disabled: true})
  });

  ngAfterViewInit() {
    setTimeout(()=>{
    this.parentForm.addControl('typeDetails', this.childComponent.identifyForm);

    })
   
  }

  onSave() {
    console.log(this.parentForm);
    this.editMode = false;
  }

  
}
