import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado2',
  templateUrl: './dado2.component.html',
  styleUrls: ['./dado2.component.css']
})
export class Dado2Component implements OnInit {

  @Input() valor:number;

  constructor() { }

  ngOnInit(): void {
  } 

}
