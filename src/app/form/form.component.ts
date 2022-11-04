import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Utente } from '../utente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() invioForm = new EventEmitter<Utente>()

  recuperaDati(element:NgForm){
    this.invioForm.emit(element.value)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
