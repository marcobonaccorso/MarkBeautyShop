/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.service;

import com.example.BarbiereServer.dto.ListaPrenotazioniParrucchiereDto;
import com.example.BarbiereServer.model.PrenotazioneParrucchiere;

/**
 *
 * @author marco
 */
public interface PrenotazioneParrucchiereService {
    ListaPrenotazioniParrucchiereDto aggiungi(PrenotazioneParrucchiere p);
    ListaPrenotazioniParrucchiereDto ricerca(String criterioRicercaAppuntamentoParrucchiere);
    ListaPrenotazioniParrucchiereDto modifica(PrenotazioneParrucchiere p);
    ListaPrenotazioniParrucchiereDto elimina(PrenotazioneParrucchiere p);
    ListaPrenotazioniParrucchiereDto aggiorna();
}
