/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.dto;

import com.example.BarbiereServer.model.Prenotazione;
import java.util.List;

/**
 *
 * @author marco
 */
public class ListaPrenotazioniDto {

    List<Prenotazione> listaPrenotazioniDto;

    public ListaPrenotazioniDto() {
    }

    public ListaPrenotazioniDto(List<Prenotazione> listaPrenotazioniDto) {
        this.listaPrenotazioniDto = listaPrenotazioniDto;
    }

    public List<Prenotazione> getListaPrenotazioniDto() {
        return listaPrenotazioniDto;
    }

    public void setListaPrenotazioniDto(List<Prenotazione> listaPrenotazioniDto) {
        this.listaPrenotazioniDto = listaPrenotazioniDto;
    }

    @Override
    public String toString() {
        return "ListaPrenotazioniDto{" + "listaPrenotazioniDto=" + listaPrenotazioniDto + '}';
    }

}
