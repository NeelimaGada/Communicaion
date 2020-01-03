import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private ht:HttpClient) { }
  PostData(a) {
    return this.ht.post(" http://localhost:3000/posts",a)
  }
 
}
