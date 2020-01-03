import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { StudentComponent } from './student/student.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
const routes: Routes =[
  {path:'master',component:MasterComponent},
  {path:'student',component:StudentComponent}

]

@NgModule({
  declarations: [MasterComponent, StudentComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,RouterModule.forChild(routes)
  ]
})
export class CommunicationModule { 
  constructor() {
    console.log("Main Module")
  }
}
