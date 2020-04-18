import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-type-attrs',
  templateUrl: './type-attrs.component.html',
  styleUrls: ['./type-attrs.component.css']
})
export class TypeAttrsComponent implements OnInit, DoCheck {
  @Input() selectedType
  type = null
  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log('selectedType', this.selectedType)
    this.type = this.selectedType

  }

}
