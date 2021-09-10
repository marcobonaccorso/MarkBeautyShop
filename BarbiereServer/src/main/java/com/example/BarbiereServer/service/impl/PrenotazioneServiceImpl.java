/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.service.impl;

import com.example.BarbiereServer.dto.ListaPrenotazioniDto;
import com.example.BarbiereServer.model.Prenotazione;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.BarbiereServer.repository.PrenotazioneRepository;
import com.example.BarbiereServer.service.PrenotazioneService;
import java.util.List;

/**
 *
 * @author marco
 */
@Service
public class PrenotazioneServiceImpl implements PrenotazioneService {

    @Autowired
    /*specifica di Spring che definisce le dipendenze tra bean, 
            sollevando lo sviluppatore da doverle definire esplicitamente. */

    PrenotazioneRepository barberShopRepository;

    @Override
    public ListaPrenotazioniDto aggiungi(Prenotazione p) {
        p = barberShopRepository.save(p);
        return aggiorna();
    }

    @Override
    public ListaPrenotazioniDto ricerca(String criterio) {
        List<Prenotazione> listaPrenotazioni = barberShopRepository.findByClienteContains(criterio);
        return new ListaPrenotazioniDto(listaPrenotazioni);
    }

    @Override
    public ListaPrenotazioniDto elimina(Prenotazione p) {
        barberShopRepository.delete(p);
        return aggiorna();
    }

    @Override
    public ListaPrenotazioniDto aggiorna() {
        return new ListaPrenotazioniDto(barberShopRepository.findAll());
    }

    @Override
    public ListaPrenotazioniDto modifica(Prenotazione p) {

        Prenotazione x = checkPrenotazione(p.getCliente());
        if (x == null || x.getId().equals(p.getId())) {
            p = barberShopRepository.save(p);
            return aggiorna();
        } else {
            System.out.println("ERRORE");
            return null;
        }
    }

    private Prenotazione checkPrenotazione(String nome) {

        return barberShopRepository.findByCliente(nome);
    }

}
