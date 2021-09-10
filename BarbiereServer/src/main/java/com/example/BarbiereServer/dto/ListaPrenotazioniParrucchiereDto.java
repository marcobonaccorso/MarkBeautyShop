/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.dto;

import com.example.BarbiereServer.model.PrenotazioneParrucchiere;
import java.util.List;

/**
 *
 * @author marco
 */
public class ListaPrenotazioniParrucchiereDto {

    List<PrenotazioneParrucchiere> listaPrenotazioniParrucchiereDto;

    public ListaPrenotazioniParrucchiereDto() {
    }

    public ListaPrenotazioniParrucchiereDto(List<PrenotazioneParrucchiere> listaPrenotazioniParrucchiereDto) {
        this.listaPrenotazioniParrucchiereDto = listaPrenotazioniParrucchiereDto;
    }

    public List<PrenotazioneParrucchiere> getListaPrenotazioniParrucchiereDto() {
        return listaPrenotazioniParrucchiereDto;
    }

    public void setListaPrenotazioniParrucchiereDto(List<PrenotazioneParrucchiere> listaPrenotazioniParrucchiereDto) {
        this.listaPrenotazioniParrucchiereDto = listaPrenotazioniParrucchiereDto;
    }

    @Override
    public String toString() {
        return "ListaPrenotazioniParrucchiereDto{" + "listaPrenotazioniParrucchiereDto=" + listaPrenotazioniParrucchiereDto + '}';
    }
    
    
}
