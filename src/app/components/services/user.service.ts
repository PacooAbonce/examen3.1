import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interface/user.modelo';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usuarios:User[]=[]

  constructor(private http:HttpClient ) { 

  }

  getAll(){
    return this.usuarios;
  }

  addUser(user:User){
    this.usuarios.push(user);
    console.log(this.usuarios);
  }
}
