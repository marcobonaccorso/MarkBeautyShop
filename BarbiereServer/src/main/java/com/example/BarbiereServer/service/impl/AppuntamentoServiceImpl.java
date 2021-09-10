/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.service.impl;

import com.example.BarbiereServer.dto.ListaAppuntamentiDto;
import com.example.BarbiereServer.model.Appuntamento;
import com.example.BarbiereServer.repository.AppuntamentoRepository;
import com.example.BarbiereServer.service.AppuntamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author marco
 */
@Service
public class AppuntamentoServiceImpl implements AppuntamentoService {

@Autowired
AppuntamentoRepository appuntamentoRepository;

    @Override
    public ListaAppuntamentiDto aggiungiAppuntamento(Appuntamento app) {
        app= appuntamentoRepository.save(app);
        return aggiorna();
    }

    @Override
    public ListaAppuntamentiDto eliminaAppuntamento(Appuntamento ea) {
        appuntamentoRepository.delete(ea);
        return aggiorna();
    }

    @Override
    public ListaAppuntamentiDto aggiorna() {
        return new ListaAppuntamentiDto(appuntamentoRepository.findAll());
    }
}
