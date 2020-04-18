import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AttributeAddComponent } from './attribute-add/attribute-add.component';
import { AdsAddComponent } from './ads-add/ads-add.component';
import { TypeAttrsComponent } from './attribute-add/type-attrs/type-attrs.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeAddComponent,
    AdsAddComponent,
    TypeAttrsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
