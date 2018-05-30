import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'pretraga-component',
  templateUrl: './pretraga.soba.component.html',
  styleUrls: ['../../../assets/scss/base.scss'],
  
})



export class PretragaSobaComponent{
  
  private sobe:Array<any> = [];
  private kvadrati = 0;
  private kreveti = 0;
  
  private domen = 'http://localhost:8080/IT255-DZ11/sobe.php';

  constructor ( private http: Http ) {
    this.http.get(this.domen).subscribe(
    data => {
      this.sobe = JSON.parse(data["_body"]);
    },
    err => console.log(err.text()),
      () => {
      }
    );}

 


}