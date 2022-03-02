import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../interface/api.modelo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 uri:string = "http://universities.hipolabs.com" 


  constructor(private http:HttpClient) { }
  escuela:any[]= []; 
   
  

  Escuela(){ 
    this.http.get(this.uri).subscribe((res:any)=>{
       res.foreach((item:any)=>{
         if(item.name == "escuela"){
           this.escuela.push(item);
         }
       });
       return this.escuela;
    });    
  }

  Buscarescuela(){
    this.http.get(this.uri).subscribe((res:any)=>{
      res.foreach((item:any)=>{
        if(item.name == "escuela"+ "pais"){
          this.escuela.map(item);
        }
      })
      return this.escuela;
    })
  }

  buscar (page : number = 1, name : string = "") {
    return this.http.get<any>(this.uri + `search?page=${page}&name=${name}` , {})
  }
}
