import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NazioniService {

  constructor( private http : HttpClient ) { }

  getAllNazioni(){
    // Restituisce un oggetto di tipo observable
    console.log(this.http.get('https://restcountries.com/v3.1/all'));
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  getNazione(nome : string){
    return this.http.get(`https://restcountries.com/v3.1/name/${nome}`);
  }
}
