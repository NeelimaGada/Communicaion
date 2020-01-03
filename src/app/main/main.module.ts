import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Main1Component } from './main1/main1.component';
import { Main2Component } from './main2/main2.component';
import { RouterModule, Routes } from '@angular/router';
import { Main3Component } from './main3/main3.component';
import { Main4Component } from './main4/main4.component';
import { Main5Component } from './main5/main5.component';

const routes: Routes = [
  {path:'main1',component:Main1Component},
  {path:'main2',component:Main2Component},
  {path:'main3',component:Main3Component},
  {path:'main4',component:Main4Component},
  {path:'main5',component:Main5Component},
  
];

@NgModule({
  declarations: [Main1Component, Main2Component, Main3Component, Main4Component, Main5Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class MainModule {
  constructor() {
    console.log("This is sub2")
  }
 }
