import {Component, OnInit} from '@angular/core';
import { User } from '../interface/user.modelo';
import { ApiService } from '../services/api.service';



@Component({
    selector: 'contenido-com',
    templateUrl:'./contenido.component.html',
    styleUrls: ['./contenido.component.css']
})

export class ContenidoComponent implements OnInit {

    
  
    constructor(private apiService:ApiService) { }
  
    ngOnInit(): void {
     
    
    }
  
  }
