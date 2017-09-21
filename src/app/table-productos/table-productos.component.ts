import { Component, OnInit } from '@angular/core';
import { Motor } from "../motor";

@Component({
  selector: 'app-table-productos',
  templateUrl: './table-productos.component.html',
  styleUrls: ['./table-productos.component.css']
})
export class TableProductosComponent implements OnInit {
  titulo = "Tabla Productos";
  motores: Motor[] = [{
    "nome":"Modelo Ragon WZ",
    "imagem":"img/motor-1.jpg",
    "descricao":"Cabe\u00e7otes individuais com 4 v\u00e1lvulas por cilindro",
    "uso":"veicular"
  },
  {
    "nome":"Modelo Ragon TY",
    "imagem":"img/motor-2.jpg",
    "descricao":"Cabe\u00e7otes individuais com 3 v\u00e1lvulas por cilindro",
    "uso":"veicular"
  },
  {
    "nome":"Modelo Delta",
    "imagem":"img/motor-3.jpg",
    "descricao":"Cabe\u00e7otes individuais com 6 v\u00e1lvulas por cilindro",
    "uso":"veicular, maritimo"
  },
  {
    "nome":"Modelo Dyna",
    "imagem":"img/motor-1.jpg",
    "descricao":"Cabe\u00e7otes individuais com 4 v\u00e1lvulas por cilindro",
    "uso":"agricola"
  },
  {
    "nome":"Modelo Tork G1",
    "imagem":"img/motor-2.jpg",
    "descricao":"Cabe\u00e7otes individuais com 4 v\u00e1lvulas por cilindro",
    "uso":"agricola, industrial"
  },
  {
    "nome":"Modelo Tork JA",
    "imagem":"img/motor-3.jpg",
    "descricao":"Cabe\u00e7otes individuais com 4 v\u00e1lvulas por cilindro",
    "uso":"industrial"
  },
  {
    "nome":"Modelo Combo Alfa",
    "imagem":"img/motor-1.jpg",
    "descricao":"Cabe\u00e7otes individuais com 4 v\u00f3lvulas por cilindro",
    "uso":"maritimo"
  },
  {
    "nome":"Modelo Combo Beta",
    "imagem":"img/motor-2.jpg",
    "descricao":"Cabe\u00e7otes individuais com 4 v\u00f3lvulas por cilindro",
    "uso":"maritimo"
  }
  ];
  constructor() {
    console.log(this.motores);
    let motor=new Motor();
    motor.nome="test";
    motor.descricao="test ww";
    motor.imagem="imagen test";
    motor.uso="uso test";

    this.motores.push(motor);
   }
  ngOnInit() {
  }

}

