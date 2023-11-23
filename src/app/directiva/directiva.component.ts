import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {

  listaCurso: string[] = ['TypeScrip','JavaScrip','Java SE','C#','php']
  habilitar: boolean = true;

  constructor() { }

  setHabilitar(): void{
    this.habilitar = (this.habilitar == true)? false: true;
  }

}
