/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.controller;

import com.example.BarbiereServer.dto.ListaPrenotazioniParrucchiereDto;
import com.example.BarbiereServer.dto.PrenotazioneParrucchiereDto;
import com.example.BarbiereServer.dto.RicercaAppuntamentoParrucchiereDto;
import com.example.BarbiereServer.service.PrenotazioneParrucchiereService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author marco
 */
@CrossOrigin("*")
/* concetto di sicurezza che consente di limitare le risorse implementate nei browser web.*/
@RestController
/*utilizzata per creare servizi Web RESTful utilizzando Spring MVC.
 */
public class PrenotazioneParrucchiereController {

    @Autowired
    /*specifica di Spring che definisce le dipendenze tra bean, 
            sollevando lo sviluppatore da doverle definire esplicitamente. */
    PrenotazioneParrucchiereService prenotazioneParrucchiereService;

    @RequestMapping("aggiungiPrenotazioneParrucchiere")
    @ResponseBody
    public ListaPrenotazioniParrucchiereDto aggiungi(@RequestBody PrenotazioneParrucchiereDto dto) {
        return prenotazioneParrucchiereService.aggiungi(dto.getPrenotazioneParrucchiereDto());
    }

    @RequestMapping("ricercaAppuntamentoParrucchiere")
    @ResponseBody
    public ListaPrenotazioniParrucchiereDto ricerca(@RequestBody RicercaAppuntamentoParrucchiereDto dto) {
        return prenotazioneParrucchiereService.ricerca(dto.getRicercaAppuntamentoParrucchiereDto());
    }

    @RequestMapping("modificaPrenotazioneParrucchiere")
    @ResponseBody
    public ListaPrenotazioniParrucchiereDto modifica(@RequestBody PrenotazioneParrucchiereDto dto) {
        return prenotazioneParrucchiereService.modifica(dto.getPrenotazioneParrucchiereDto());
    }

    @RequestMapping("eliminaPrenotazioneParrucchiere")
    @ResponseBody
    public ListaPrenotazioniParrucchiereDto elimina(@RequestBody PrenotazioneParrucchiereDto dto) {
        return prenotazioneParrucchiereService.elimina(dto.getPrenotazioneParrucchiereDto());
    }

    @RequestMapping("aggiornaPrenotazioneParrucchiere")
    @ResponseBody
    public ListaPrenotazioniParrucchiereDto aggiorna() {
        return prenotazioneParrucchiereService.aggiorna();
    }

}
