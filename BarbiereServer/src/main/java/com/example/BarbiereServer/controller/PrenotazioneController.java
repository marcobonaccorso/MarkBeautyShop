/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.controller;

import com.example.BarbiereServer.dto.CriterioRicercaDto;
import com.example.BarbiereServer.dto.ListaPrenotazioniDto;
import com.example.BarbiereServer.dto.PrenotazioneDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.BarbiereServer.service.PrenotazioneService;

/**
 *
 * @author marco
 */
@CrossOrigin("*")
/* concetto di sicurezza che consente di limitare le risorse implementate nei browser web.*/
@RestController
/*utilizzata per creare servizi Web RESTful utilizzando Spring MVC.
 */
public class PrenotazioneController {

    @Autowired
    /*specifica di Spring che definisce le dipendenze tra bean, 
            sollevando lo sviluppatore da doverle definire esplicitamente. */

    PrenotazioneService barberShopService;

    @RequestMapping("aggiungi")
    @ResponseBody
    public ListaPrenotazioniDto aggiungi(@RequestBody PrenotazioneDto dto) {
        return barberShopService.aggiungi(dto.getPrenotazioneDto());
    }

    @RequestMapping("ricerca")
    @ResponseBody
    public ListaPrenotazioniDto ricerca(@RequestBody CriterioRicercaDto dto) {
        return barberShopService.ricerca(dto.getStringa());
    }

    @RequestMapping("/modificaPrenotazione")
    @ResponseBody
    ListaPrenotazioniDto modifica(@RequestBody PrenotazioneDto dto) {
        return barberShopService.modifica(dto.getPrenotazioneDto());
    }

    @RequestMapping("elimina")
    @ResponseBody
    public ListaPrenotazioniDto elimina(@RequestBody PrenotazioneDto dto) {
        return barberShopService.elimina(dto.getPrenotazioneDto());
    }

    @RequestMapping("aggiorna")
    @ResponseBody
    public ListaPrenotazioniDto aggiorna() {
        return barberShopService.aggiorna();
    }
}
