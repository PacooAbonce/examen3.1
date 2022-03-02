import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ContenidoComponent } from "../components/contenido/contenido.component";
import { HomeComponent } from "../components/home/home.component";

const routes : Routes =[
    {
        path:'contenido',
        component:ContenidoComponent
    },
    {
        path:'',
        component:HomeComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes) ],
    exports : [RouterModule]
})
export class AppRotingModule { }
