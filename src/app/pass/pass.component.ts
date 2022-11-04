import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.scss']
})
export class PassComponent implements OnInit {

  @Input() eta! : number;


  constructor() { }

  ngOnInit(): void {
  }

}
