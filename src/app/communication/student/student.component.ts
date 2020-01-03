import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  registerForm;
  submitted: boolean;
  obj: any;
  
  // @Input() formData:any=[];
  @Output() onAdd= new EventEmitter
  @Output() onEdit=new EventEmitter
  obj1: any;
  constructor(private fb:FormBuilder,private s:DataService) { }
  get f() { return this.registerForm.controls; }
  ngOnInit() {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      gender: ['', Validators.required],
      username: ['', Validators.required],
      mobileno: ['', Validators.required],
      courses: ['', Validators.required],
    }
  );
  }
  onSubmit() {
    this.submitted = true;
 
   
    if (this.registerForm.invalid) {
        return;
    }
 
    this.obj=this.registerForm.value
    this.onAdd.emit(this.obj);
    console.log(this.registerForm.value)
  
    
}
update(){
      this.obj1=this.registerForm.value
      this.onEdit.emit(this.obj1);
      console.log(this.registerForm.value)
}
}
