import { Component } from '@angular/core';
import { ElementsService } from './services/elements.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tableFiltering';
  listaElementi !: Elemento[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource();

  constructor(private elementi : ElementsService){}

  ngOnInit(){
    console.log(this.elementi.visualizzaUtenti().subscribe(
      {next: (e: any) => {this.listaElementi=e; console.log(this.listaElementi); this.dataSource.data=this.listaElementi;}}
      ));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filteredData);
  }
}

export interface Elemento{
  id:number;
  nome:string;
  peso:number;
  simbolo:string;
}
