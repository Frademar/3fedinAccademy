import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'palinsesto';
listaFilm : Film[]=[
  {
    nome_film: "The Lord of the Rings: The Fellowship of the Ring",
    genere: ["Fantasy", "Azione", "Avventura"],
    anno_produzione: 2001,
    descrizione: "Un giovane hobbit di nome Frodo Baggins viene incaricato di distruggere un potente anello magico, portandolo attraverso la Terra di Mezzo fino al Monte Fato, accompagnato da un gruppo di alleati variopinti.",
    durata: "178 minuti",
    oscar: true
  },
  {
    nome_film: "The Avengers",
    genere: ["Azione", "Fantascienza"],
    anno_produzione: 2012,
    descrizione: "Un gruppo di supereroi, tra cui Iron Man, Captain America, Thor e Hulk, si unisce per difendere la Terra dall'attacco di un malvagio dio alieno e del suo esercito.",
    durata: "143 minuti",
    oscar: false
  },
  {
    nome_film: "The Social Network",
    genere: ["Biografia", "Drammatico"],
    anno_produzione: 2010,
    descrizione: "La storia della fondazione di Facebook da parte di Mark Zuckerberg e del controverso processo legale che ne è seguito, con amicizie tradite e relazioni incagliate.",
    durata: "120 minuti",
    oscar: true
  },
  {
    nome_film: "The Revenant",
    genere: ["Avventura", "Drammatico", "Thriller"],
    anno_produzione: 2015,
    descrizione: "Basato su una storia vera, un cacciatore viene abbandonato e lasciato per morto nella spietata frontiera americana dopo essere stato ferito da un orso. Lotta per sopravvivere e cercare vendetta.",
    durata: "156 minuti",
    oscar: true
  },
  {
    nome_film: "Joker",
    genere: ["Crimine", "Drammatico", "Thriller"],
    anno_produzione: 2019,
    descrizione: "La storia di Arthur Fleck, un uomo emarginato e disturbato che alla fine diventa il leggendario supercriminale noto come Joker, mentre Gotham City affonda sempre più nel caos.",
    durata: "122 minuti",
    oscar: true
  },
  {
    nome_film: "The Shawshank Redemption",
    genere: ["Drammatico", "Crime"],
    anno_produzione: 1994,
    descrizione: "La storia di Andy Dufresne, un banchiere condannato ingiustamente per omicidio, che trascorre due decenni nella prigione di Shawshank e forma un'inattesa amicizia con un altro detenuto, Red.",
    durata: "142 minuti",
    oscar: false
  },
  {
    nome_film: "Pulp Fiction",
    genere: ["Crime", "Drammatico"],
    anno_produzione: 1994,
    descrizione: "Una serie di storie interconnesse che ruotano attorno a gangster, combattenti, droga e una valigetta misteriosa, tutte raccontate in uno stile non lineare distintivo.",
    durata: "154 minuti",
    oscar: true
  },
  {
    nome_film: "The Godfather: Part II",
    genere: ["Drammatico", "Crime"],
    anno_produzione: 1974,
    descrizione: "Una narrazione parallela segue la giovinezza di Vito Corleone mentre diventa il padrino e il successo di suo figlio Michael nel mantenere il potere della famiglia Corleone.",
    durata: "202 minuti",
    oscar: true
  },
  {
    nome_film: "Schindler's List",
    genere: ["Biografia", "Drammatico", "Storico"],
    anno_produzione: 1993,
    descrizione: "La vera storia di Oskar Schindler, un uomo d'affari tedesco che salva la vita di oltre un migliaio di ebrei durante l'Olocausto, impiegandoli nelle sue fabbriche.",
    durata: "195 minuti",
    oscar: true
  },
  {
    nome_film: "Fight Club",
    genere: ["Drammatico", "Thriller"],
    anno_produzione: 1999,
    descrizione: "Un uomo insoddisfatto della sua vita anonima forma un club segreto con un venditore di sapone carismatico, che si trasforma presto in una pericolosa e sconvolgente rete di violenza e anarchia.",
    durata: "139 minuti",
    oscar: false
  }
]
}
export interface Film{
  nome_film : string;
  genere : string[];
  anno_produzione : number;
  descrizione : string;
  durata : string;
  oscar : boolean;
}