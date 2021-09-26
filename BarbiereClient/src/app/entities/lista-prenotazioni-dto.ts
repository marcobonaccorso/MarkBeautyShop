import { Prenotazione } from "./prenotazione";

export class ListaPrenotazioniDto{
    listaPrenotazioniDto:Prenotazione[]=[];
    errore = false;
    messaggioErrore = "";
}