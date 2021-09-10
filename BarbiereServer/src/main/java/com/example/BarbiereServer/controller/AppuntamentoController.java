/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.controller;

import com.example.BarbiereServer.dto.AppuntamentoDto;
import com.example.BarbiereServer.dto.ListaAppuntamentiDto;
import com.example.BarbiereServer.service.AppuntamentoService;
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
public class AppuntamentoController {

    @Autowired
    AppuntamentoService appuntamentoService;

    @RequestMapping("aggiungiAppuntamento")
    @ResponseBody
    public ListaAppuntamentiDto aggiungi(@RequestBody AppuntamentoDto dto) {
        return appuntamentoService.aggiungiAppuntamento(dto.getAppuntamentoDto());
    }

    @RequestMapping("eliminaAppuntamento")
    @ResponseBody
    public ListaAppuntamentiDto elimina(@RequestBody AppuntamentoDto dto) {
        return appuntamentoService.eliminaAppuntamento(dto.getAppuntamentoDto());
    }

    @RequestMapping("aggiornaDb")
    @ResponseBody
    public ListaAppuntamentiDto aggiorna() {
        return appuntamentoService.aggiorna();
    }

}
