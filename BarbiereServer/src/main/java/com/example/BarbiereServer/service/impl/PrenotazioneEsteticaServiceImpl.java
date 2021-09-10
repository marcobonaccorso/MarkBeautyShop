/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.service.impl;

import com.example.BarbiereServer.dto.ListaPrenotazioniEsteticaDto;
import com.example.BarbiereServer.model.PrenotazioneEstetica;
import com.example.BarbiereServer.repository.PrenotazioneEsteticaRepository;
import com.example.BarbiereServer.service.PrenotazioneEsteticaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author marco
 */
@Service
public class PrenotazioneEsteticaServiceImpl implements PrenotazioneEsteticaService {

    @Autowired
    PrenotazioneEsteticaRepository prenotazioneEsteticaRepository;

    @Override
    public ListaPrenotazioniEsteticaDto aggiungi(PrenotazioneEstetica pE) {
        pE = prenotazioneEsteticaRepository.save(pE);
        return aggiorna();
    }

    @Override
    public ListaPrenotazioniEsteticaDto elimina(PrenotazioneEstetica pE) {
        prenotazioneEsteticaRepository.delete(pE);
        return aggiorna();
    }

    @Override
    public ListaPrenotazioniEsteticaDto aggiorna() {
        return new ListaPrenotazioniEsteticaDto(prenotazioneEsteticaRepository.findAll());
    }

    @Override
    public ListaPrenotazioniEsteticaDto modifica(PrenotazioneEstetica pE) {
        PrenotazioneEstetica x = ckeckPrenotazioneEstetica(pE.getCliente());
        if (x == null || x.getId().equals(pE.getId())) {
            pE = prenotazioneEsteticaRepository.save(pE);
            return aggiorna();
        } else {
            System.out.println("ERRORE");
            return null;
        }
    }

    private PrenotazioneEstetica ckeckPrenotazioneEstetica(String x) {
        return prenotazioneEsteticaRepository.findByCliente(x);
    }
}
