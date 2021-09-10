/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.controller;

import com.example.BarbiereServer.dto.ListaProdottiCapelliDto;
import com.example.BarbiereServer.dto.ProdottoCapelliDto;
import com.example.BarbiereServer.service.ProdottoCapelliService;
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
public class ProdottoCapelliController {

    @Autowired
    ProdottoCapelliService prodottoCapelliService;

    @RequestMapping("aggiungiProdotto")
    @ResponseBody
    public ListaProdottiCapelliDto aggiungi(@RequestBody ProdottoCapelliDto dto) {
        return prodottoCapelliService.aggiungiProdotto(dto.getProdottoCapelliDto());
    }

    @RequestMapping("eliminaProdotto")
    @ResponseBody
    public ListaProdottiCapelliDto elimina(@RequestBody ProdottoCapelliDto dto) {
        return prodottoCapelliService.eliminaProdotto(dto.getProdottoCapelliDto());
    }

    @RequestMapping("aggiornaDatabase")
    @ResponseBody
    public ListaProdottiCapelliDto aggiorna() {
        return prodottoCapelliService.aggiorna();
    }

}
