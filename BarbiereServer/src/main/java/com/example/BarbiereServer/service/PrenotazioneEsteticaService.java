/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.service;

import com.example.BarbiereServer.dto.ListaPrenotazioniEsteticaDto;
import com.example.BarbiereServer.model.PrenotazioneEstetica;

/**
 *
 * @author marco
 */
public interface PrenotazioneEsteticaService {
    
    ListaPrenotazioniEsteticaDto aggiungi(PrenotazioneEstetica pE);
       ListaPrenotazioniEsteticaDto modifica(PrenotazioneEstetica pE);
    ListaPrenotazioniEsteticaDto elimina(PrenotazioneEstetica pE);
    ListaPrenotazioniEsteticaDto aggiorna();
}
