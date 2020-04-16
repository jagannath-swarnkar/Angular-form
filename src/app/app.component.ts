import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, Form } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // @ViewChild('uploadedImg') uploadedImg
  assets=['new','used']
  assetTypes=['Properties', 'Mobiles','Cars', 'Lopongo', 'Lopongo long','assettype name for testing']
  lopongoForm: FormGroup
  
  ngOnInit(){
    this.lopongoForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'currency': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'location': new FormControl(null, Validators.required),
      'area': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'postalCode': new FormControl(null, Validators.required),
      'state': new FormControl(null, Validators.required),
      'country': new FormControl(null, Validators.required),
      'priceNegotiable': new FormControl(null, Validators.required),
      'availableForExchange': new FormControl(null, Validators.required),
      'image': new FormControl(null, Validators.required),
      'assets': new FormControl(null, Validators.required),
      'assetTypes': new FormControl(null, Validators.required)
    })
  }

  onSubmit(){
    console.log(this.lopongoForm.value)
    this.lopongoForm.reset();
  }
}
