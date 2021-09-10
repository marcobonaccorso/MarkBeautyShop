/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.controller;

import com.example.BarbiereServer.dto.ListaPrenotazioniEsteticaDto;
import com.example.BarbiereServer.dto.PrenotazioneEsteticaDto;
import com.example.BarbiereServer.service.PrenotazioneEsteticaService;
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
public class PrenotazioneEsteticaController {

    @Autowired
    /*specifica di Spring che definisce le dipendenze tra bean, 
            sollevando lo sviluppatore da doverle definire esplicitamente
     */
    PrenotazioneEsteticaService prenotazioneEsteticaService;

    @RequestMapping("aggiungiPrenotazioneEstetica")
    @ResponseBody
    public ListaPrenotazioniEsteticaDto aggiungi(@RequestBody PrenotazioneEsteticaDto dto) {
        return prenotazioneEsteticaService.aggiungi(dto.getPrenotazioneEsteticaDto());
    }

    @RequestMapping("modificaPrenotazioneEstetica")
    @ResponseBody
    public ListaPrenotazioniEsteticaDto modifica(@RequestBody PrenotazioneEsteticaDto dto) {
        return prenotazioneEsteticaService.modifica(dto.getPrenotazioneEsteticaDto());
    }

    @RequestMapping("eliminaPrenotazioneEstetica")
    @ResponseBody
    public ListaPrenotazioniEsteticaDto elimina(@RequestBody PrenotazioneEsteticaDto dto) {
        return prenotazioneEsteticaService.elimina(dto.getPrenotazioneEsteticaDto());
    }

    @RequestMapping("aggiornaPrenotazioneEstetica")
    @ResponseBody
    public ListaPrenotazioniEsteticaDto aggiorna() {
        return prenotazioneEsteticaService.aggiorna();
    }

}
