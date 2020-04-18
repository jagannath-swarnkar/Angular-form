import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, Form } from '@angular/forms';

@Component({
  selector: 'app-attribute-add',
  templateUrl: './attribute-add.component.html',
  styleUrls: ['./attribute-add.component.css']
})
export class AttributeAddComponent implements OnInit {
  spanish: boolean = false;
  hindi: boolean = false;
  result= {}
  type = null;
  typeEventValue = null
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
  errorMessageColor = '1px solid lightgrey'
  attributeForm: FormGroup;
  formSubmitted = false;

  constructor() { }

  ngOnInit(): void {
    this.attributeForm = new FormGroup({
      'titleEnglish': new FormControl(null, Validators.required),
      'titleHindi': new FormControl(null),
      'titleSpanish': new FormControl(null),
      'titleTag': new FormControl(null, Validators.required),
      'type': new FormControl(null, Validators.required),
      'icon': new FormControl(null),
      'mandatory': new FormControl(false, Validators.required),
      'filterable': new FormControl(false, Validators.required),
      'ratable': new FormControl(false, Validators.required),
      'textData': new FormControl('test text')
    })
  }

  onSubmit() {
    this.formSubmitted = true;
    //checking for validation
    if (this.attributeForm.valid) {
      this.result = this.attributeForm.value
      this.result['selectedTypeValue'] = this.typeEventValue
      console.log(this.result)

      // after success submission
      this.formSubmitted = false;
      this.type = null;
    }else{
      console.log('invalid form')
    }
    this.attributeForm.reset();
  }

  typeChange(event) {
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

  typeValue(event: Event) {
    this.typeEventValue = event
  }

}
