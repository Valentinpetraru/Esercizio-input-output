import { Component, Input, OnInit } from '@angular/core';
import { Utente } from '../utente';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.scss']
})
export class TabellaComponent implements OnInit {

  @Input()listaUtenti!: Utente[];

  constructor() { }

  ngOnInit(): void {
  }

}
