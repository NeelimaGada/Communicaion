import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private ht:HttpClient) { }
  Neelu(d) {
    return this.ht.post("http://localhost:3000/posts",d)
  }
  Neelu1(){
    return this.ht.get("http://localhost:3000/posts")
  }
  updateUser(s) {
    return this.ht.put("http://localhost:3000/posts" + '/' + s.id, s);
  }
  deleteUser(s){
    return this.ht.delete("http://localhost:3000/posts/"+s)
  }
  
}
