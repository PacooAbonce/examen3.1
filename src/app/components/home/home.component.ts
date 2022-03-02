import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nombre : string  =""
  select : string = ""
  usuarios:any[]=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.traerUsuarios();
    
  }

   async traerUsuarios(){
    
      this.usuarios = await Promise.all(this.userService.getAll());
    
    console.log("User EN HOME");
    console.log(this.usuarios);
  }

}
