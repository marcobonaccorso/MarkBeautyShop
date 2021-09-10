/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.service.impl;

import com.example.BarbiereServer.dto.ListaPrenotazioniParrucchiereDto;
import com.example.BarbiereServer.model.PrenotazioneParrucchiere;
import com.example.BarbiereServer.repository.PrenotazioneParrucchiereRepository;
import com.example.BarbiereServer.service.PrenotazioneParrucchiereService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author marco
 */
@Service
public class PrenotazioneParrucchiereServiceImpl implements PrenotazioneParrucchiereService {

    @Autowired
    PrenotazioneParrucchiereRepository prenotazioneParrucchiereRepository;

    @Override
    public ListaPrenotazioniParrucchiereDto aggiungi(PrenotazioneParrucchiere p) {
        p = prenotazioneParrucchiereRepository.save(p);
        return aggiorna();
    }

    @Override
    public ListaPrenotazioniParrucchiereDto modifica(PrenotazioneParrucchiere p) {
        PrenotazioneParrucchiere x = ckeckPrenotazioneParrucchiere(p.getCliente());
        if (x == null || x.getId().equals(p.getId())) {
            p = prenotazioneParrucchiereRepository.save(p);
            return aggiorna();
        } else {
            System.out.println("ERRORE");
            return null;
        }
    }

    @Override
    public ListaPrenotazioniParrucchiereDto ricerca(String criterioRicercaAppuntamentoParrucchiere) {
        List<PrenotazioneParrucchiere> listaPrenotazioniParrucchiere = prenotazioneParrucchiereRepository.findByClienteContains(criterioRicercaAppuntamentoParrucchiere);
        return new ListaPrenotazioniParrucchiereDto(listaPrenotazioniParrucchiere);
    }

    @Override
    public ListaPrenotazioniParrucchiereDto elimina(PrenotazioneParrucchiere p) {
        prenotazioneParrucchiereRepository.delete(p);
        return aggiorna();
    }

    @Override
    public ListaPrenotazioniParrucchiereDto aggiorna() {

        return new ListaPrenotazioniParrucchiereDto(prenotazioneParrucchiereRepository.findAll());
    }

    private PrenotazioneParrucchiere ckeckPrenotazioneParrucchiere(String x) {
        return prenotazioneParrucchiereRepository.findByCliente(x);
    }

}
