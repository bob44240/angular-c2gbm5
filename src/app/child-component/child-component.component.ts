import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

identifyForm = new FormGroup({
    identity: new FormControl({value:'no',disabled:true}),
    identityname: new FormControl({value:'this should only be enabled if value is yes',disabled:true})
  });
  @Input('editMode') editMode:boolean
  constructor() { }

  ngOnInit() {
  }

  


}