import { Component } from '@angular/core';
import { NazioniService } from '../services/nazioni.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  listaNazioni !: any[];
  constructor(private nazioniService: NazioniService) { }

  ngOnInit() {
    console.log(this.nazioniService.getAllNazioni().subscribe());
    this.nazioniService.getAllNazioni().subscribe(
      {next: (data : any) => {this.listaNazioni=data; console.log(this.listaNazioni);}}
    );
  }
}
