import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { StudentComponent } from '../student/student.component';
import { identifierModuleUrl } from '@angular/compiler';


@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

    

  result:Object;
  
  constructor(private s:DataService) { }
    @ViewChild(StudentComponent ,{static:true})
  stuComp:StudentComponent;
  addUser(event) {
  this.s.Neelu(event).subscribe(resp=>{console.log(resp)
  this.getData()})
  
    }
  editUser(event) {
  this.s.updateUser(event).subscribe(resp=>{console.log(resp)
   
  this.getData()
      })
  console.log(event)
    }
  getData() {
  this.s.Neelu1().subscribe(resp=>this.result=resp)
    }
  delete(a) {
  this.s.deleteUser(a).subscribe(resp=>{console.log(resp)
  this.getData()})
    }
  edit(a){
  this.stuComp.registerForm.setValue({
 
  firstname:a.firstname,
  lastname:a.lastname,
  username:a.username,
  mobileno:a.mobileno,
  gender:a.gender,
  courses:a.courses
   
      })
   
    }
  ngOnInit() {
  this.getData()
  
    }
  
  
}
