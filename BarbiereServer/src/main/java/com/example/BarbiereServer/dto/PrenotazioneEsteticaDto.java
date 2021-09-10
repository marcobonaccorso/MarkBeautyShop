/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.dto;

import com.example.BarbiereServer.model.PrenotazioneEstetica;

/**
 *
 * @author marco
 */
public class PrenotazioneEsteticaDto {
 PrenotazioneEstetica  prenotazioneEsteticaDto;

    public PrenotazioneEsteticaDto() {
    }

    public PrenotazioneEsteticaDto(PrenotazioneEstetica prenotazioneEsteticaDto) {
        this.prenotazioneEsteticaDto = prenotazioneEsteticaDto;
    }

    public PrenotazioneEstetica getPrenotazioneEsteticaDto() {
        return prenotazioneEsteticaDto;
    }

    public void setPrenotazioneEsteticaDto(PrenotazioneEstetica prenotazioneEsteticaDto) {
        this.prenotazioneEsteticaDto = prenotazioneEsteticaDto;
    }

    @Override
    public String toString() {
        return "PrenotazioneEsteticaDto{" + "prenotazioneEsteticaDto=" + prenotazioneEsteticaDto + '}';
    }
 
 
}
