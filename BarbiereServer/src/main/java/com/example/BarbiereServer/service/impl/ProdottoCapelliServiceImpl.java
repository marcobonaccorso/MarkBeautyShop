/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.service.impl;

import com.example.BarbiereServer.dto.ListaProdottiCapelliDto;
import com.example.BarbiereServer.model.ProdottoCapelli;
import com.example.BarbiereServer.repository.ProdottoCapelliRepository;
import com.example.BarbiereServer.service.ProdottoCapelliService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author marco
 */
@Service
public class ProdottoCapelliServiceImpl implements ProdottoCapelliService {

    @Autowired
    ProdottoCapelliRepository prodottoCapelliRepository;

    @Override
    public ListaProdottiCapelliDto aggiungiProdotto(ProdottoCapelli p) {
        p = prodottoCapelliRepository.save(p);
        return aggiorna();
    }

    @Override
    public ListaProdottiCapelliDto eliminaProdotto(ProdottoCapelli p) {
        prodottoCapelliRepository.delete(p);
        return aggiorna();
    }

    @Override
    public ListaProdottiCapelliDto aggiorna() {
        return new ListaProdottiCapelliDto(prodottoCapelliRepository.findAll());
    }

}
