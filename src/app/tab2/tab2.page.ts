import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { User } from '../interface/user.modelo';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  users:User[]=[];
  arreglo:[]=[];
  escuelas:[]=[];

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
   this.apiService.getApi().subscribe((res:any)=>{
      this.arreglo = res;
      console.log(this.arreglo)
   })
  
  }

}

