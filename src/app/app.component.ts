import { Component, OnInit } from '@angular/core';
import { Utente } from './utente';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 listaUsers : Utente[] = []


recuperaUser(user: any){
  this.listaUsers.push(user)
}

  constructor(){

  }



ngOnInit(): void { }






}
