import { Component, OnInit, Input, DoCheck, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-type-attrs',
  templateUrl: './type-attrs.component.html',
  styleUrls: ['./type-attrs.component.css']
})
export class TypeAttrsComponent implements OnInit, DoCheck {
  @Input() selectedType;
  @Input() formSubmitStatus;
  @Output() selectedTypeValue = new EventEmitter<any>();
  
  type = null;
  selectBrand = false;
  selectedTypeData: FormGroup;
  rangeSliderList = 'VU - Volume,LTON - Long Ton,IN -inch,st. - Stone,Quires - Quires, Short Hundred weight - Short Hundred weight,S/T -Short Ton,TN - Ton,Bullet -Bullet,pt - Part,STK - Stick,Q - Quintal,Metric-HP - Metric Horsepower,TANK - Tank,pc(s) - Piece,SET - Set,pkg-Package,BLOCK - BLock,DOZEN - Dozen,gm - Gram,kg - Kilogram,m - Meter,sq.m - Square Meter,cb.m - Cubic Meter,SHEET - Sheet, CTM - Cartoon'

  unitName: string;
  minValue: number;
  maxValue: number;
  arrayValue: string;
  selectedBrands: string;

  dataDict = {}
  finalValue = {}

  constructor() {
    this.dataDict['unitName'] = this.unitName;
    this.dataDict['minValue'] = this.minValue;
    this.dataDict['maxValue'] = this.maxValue;
    this.dataDict['arrayValue'] = this.arrayValue;
    this.dataDict['selectedBrands'] = this.selectedBrands;
    this.selectedTypeData = new FormGroup({
      'textBox': new FormControl(null),
      'textArea': new FormControl(null),
    })
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log('selectedType', this.selectedType)
    this.dataDict['unitName'] = this.unitName
    this.dataDict['minValue'] = this.minValue
    this.dataDict['maxValue'] = this.maxValue
    this.dataDict['arrayValue'] = this.arrayValue
    this.dataDict['selectedBrands'] = this.selectedBrands
    for (let i in this.dataDict) {
      if (this.dataDict[i]) {
        this.finalValue[i] = this.dataDict[i]
      }
    }
    this.selectedTypeValue.emit(this.finalValue);
    // console.log('datadict >>>>>>>', this.finalValue)

    this.type = this.selectedType
  }

  toSelectBrand() {
    this.selectBrand = true
  }

}
