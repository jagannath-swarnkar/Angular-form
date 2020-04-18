import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, Form } from '@angular/forms';

@Component({
  selector: 'app-attribute-add',
  templateUrl: './attribute-add.component.html',
  styleUrls: ['./attribute-add.component.css']
})
export class AttributeAddComponent implements OnInit {
  spanish: boolean = false;
  hindi: boolean = false;
  dummy = 'select one';
  type=null;
  typeList = [
    'Text Box',
    'Text Area',
    'Range Slider',
    'Checkbox',
    'Radio Button',
    'Location',
    '+/- controller',
    'Numerical Input box',
    'Datetime Field',
    'Year Field',
    'Image Upload',
    'Video Upload',
    'True/False Toggle',
    'Brands & Models',
    'URL'
  ]

  attributeForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.attributeForm = new FormGroup({
      'titleEnglish': new FormControl(null, Validators.required),
      'titleHindi': new FormControl(null),
      'titleSpanish': new FormControl(null),
      'titleTag': new FormControl(null, Validators.required),
      'type': new FormControl(null, Validators.required),
      'icon': new FormControl(null, Validators.required),
      'mandatory': new FormControl(false, Validators.required),
      'filterable': new FormControl(false, Validators.required),
      'ratable': new FormControl(false, Validators.required)
    })
  }

  onSubmit(){
    console.log(this.attributeForm)
    // this.lopongoForm.reset();
  }

  typeChange(event){
    console.log(event.target.value)
    this.type = event.target.value
  }

  addSpanish(event) {
    console.log(event.target.checked);
    this.spanish = event.target.checked
  }
  addHindi(event) {
    console.log(event.target.checked);
    this.hindi = event.target.checked
  }

}
