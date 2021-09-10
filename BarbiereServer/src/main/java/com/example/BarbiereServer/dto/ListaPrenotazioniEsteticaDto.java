/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.dto;

import com.example.BarbiereServer.model.PrenotazioneEstetica;
import java.util.List;

/**
 *
 * @author marco
 */
public class ListaPrenotazioniEsteticaDto {
    List<PrenotazioneEstetica>listaPrenotazioniEsteticaDto;

    public ListaPrenotazioniEsteticaDto() {
    }

    public ListaPrenotazioniEsteticaDto(List<PrenotazioneEstetica> listaPrenotazioniEsteticaDto) {
        this.listaPrenotazioniEsteticaDto = listaPrenotazioniEsteticaDto;
    }

    public List<PrenotazioneEstetica> getListaPrenotazioniEsteticaDto() {
        return listaPrenotazioniEsteticaDto;
    }

    public void setListaPrenotazioniEsteticaDto(List<PrenotazioneEstetica> listaPrenotazioniEsteticaDto) {
        this.listaPrenotazioniEsteticaDto = listaPrenotazioniEsteticaDto;
    }

    @Override
    public String toString() {
        return "ListaPrenotazioniEsteticaDto{" + "listaPrenotazioniEsteticaDto=" + listaPrenotazioniEsteticaDto + '}';
    }
    
}
