import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.component.html',
  styleUrls: ['./registrati.component.css']
})
export class RegistratiComponent {
 registrazione= new FormGroup(
  {
    nome: new FormControl('', [Validators.required]),
    cognome: new FormControl('', [Validators.required]),
    eta: new FormControl('', [Validators.required, Validators.min(0), Validators.max(90)]),
    foto: new FormControl('', [Validators.required]),
    ruolo: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl('',[
      Validators.required,
      Validators.minLength(15),
      Validators.maxLength(15),

      // Quando scrivi un'espressione regolare in una stringa JavaScript, come nel caso di Angular, devi utilizzare due barre rovesciate \\ per rappresentare una singola barra rovesciata \. Questo perché la barra rovesciata \ è un carattere di escape anche nelle stringhe JavaScript (evitiamo ambiguità).
      // d{1,3} la dicitura 'd' permette di rilevare dal campo degli interi, seguita da parentesi '{}' per definire l'intervallo, quanti elementi possono intercorrere nell'input.
      // \\s corrisponde a qualsiasi spazio vuoto (spazio, tabulazione, avanzamento riga).
      // [0-9]+ la sfera di elementi degli interi devono essere ripetuti uno più volte.
      // il pattern deve inizia quando si incontra ^ e terminare in prossimita di $.

      Validators.pattern("^\\+\\d{1,3}\\s[0-9]+$")]),
    sede: new FormControl('', [Validators.required]),
    mappa: new FormControl('',[Validators.required])
  }
 )
 ngOnInit(){
  console.log(this.registrazione)
 }
}
