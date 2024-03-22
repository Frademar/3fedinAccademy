import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NazioniService } from '../services/nazioni.service';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.css']
})
export class DettagliComponent {
  nazione : string="";
  infoNazione !: any[];
  listaChiavi : string[]=[];

  constructor(private router : ActivatedRoute, private nazioniService: NazioniService){}

  ngOnInit() {
    console.log(this.router.paramMap.subscribe())
  this.router.paramMap.subscribe(
      {next: (data : any) => {this.nazione=data.params.nome; console.log(this.nazione);}}
      );
      this.nazioniService.getNazione(this.nazione).subscribe(
        {next: (data : any) => {this.infoNazione = data; console.log(this.infoNazione);}}
      )
  }

  listaChiaviLingua(listaLingue : any[], index : number){
    for(const key in listaLingue) {
      this.listaChiavi.push(key);
    }
    return this.listaChiavi[index];
  }

}
