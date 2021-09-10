/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.service;

import com.example.BarbiereServer.dto.ListaAppuntamentiDto;
import com.example.BarbiereServer.model.Appuntamento;

/**
 *
 * @author marco
 */
public interface AppuntamentoService {

    ListaAppuntamentiDto aggiungiAppuntamento(Appuntamento app);

    ListaAppuntamentiDto eliminaAppuntamento(Appuntamento ea);

    ListaAppuntamentiDto aggiorna();

}
