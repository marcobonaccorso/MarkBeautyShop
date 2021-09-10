/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.service;

import com.example.BarbiereServer.dto.ListaPrenotazioniDto;
import com.example.BarbiereServer.model.Prenotazione;

/**
 *
 * @author marco
 */
public interface PrenotazioneService {
    
    ListaPrenotazioniDto aggiungi(Prenotazione p);
    ListaPrenotazioniDto ricerca(String criterio);
    ListaPrenotazioniDto elimina(Prenotazione p);
    ListaPrenotazioniDto modifica(Prenotazione p);
    ListaPrenotazioniDto aggiorna();
    
    
}
