import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  constructor(private http : HttpClient) { }

  visualizzaUtenti(){
    return this.http.get("http://localhost:8080/api/elementi/restituisciElementi")
  }
  
}
