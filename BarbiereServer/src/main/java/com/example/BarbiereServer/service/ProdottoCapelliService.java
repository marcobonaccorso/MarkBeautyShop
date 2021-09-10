/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.service;

import com.example.BarbiereServer.dto.ListaProdottiCapelliDto;
import com.example.BarbiereServer.model.ProdottoCapelli;

/**
 *
 * @author marco
 */
public interface ProdottoCapelliService {

    ListaProdottiCapelliDto aggiungiProdotto(ProdottoCapelli p);

    ListaProdottiCapelliDto eliminaProdotto(ProdottoCapelli p);

    ListaProdottiCapelliDto aggiorna();

}
