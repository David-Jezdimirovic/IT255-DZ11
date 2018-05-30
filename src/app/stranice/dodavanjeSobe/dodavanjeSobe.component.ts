import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers} from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dodavanjeSobe',
  templateUrl: './dodavanjeSobe.component.html',
  styleUrls: ['./dodavanjeSobe.component.css']
})
export class DodavanjeSobeComponent implements OnInit {

  public dodavanjeSobeForm = new FormGroup({
    broj: new FormControl(),
    naziv: new FormControl(),
    tv: new FormControl(),
    kvadrati: new FormControl(),
    kreveti: new FormControl()
  });

  constructor(private _http: Http, private _router: Router) { }

  ngOnInit() {
  }

  public dodajSobu() {
    const body = new URLSearchParams();

    body.set('broj', this.dodavanjeSobeForm.value.broj);
    body.set('naziv', this.dodavanjeSobeForm.value.naziv);
    body.set('tv', this.dodavanjeSobeForm.value.tv);
    body.set('kvadrati', this.dodavanjeSobeForm.value.kvadrati);
    body.set('kreveti', this.dodavanjeSobeForm.value.kreveti);

    const headers = new Headers();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');
    // this._http.post
   this._http.post('http://localhost:8080/IT255-DZ11/dodavanjeSobe.php', body.toString(), {
      headers: headers,
    }).subscribe((result) => {
      this._router.navigateByUrl('/');
    }, (error) => {
      console.log(error);
    });

  }
}
