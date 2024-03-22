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
  infoNazione : any[]=[];
  listaChiavi : any[]=[];

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

  listaChiaviLingua(){
    this.listaChiavi=Object.keys(this.infoNazione[0].languages);
    return this.listaChiavi;
  }

}
