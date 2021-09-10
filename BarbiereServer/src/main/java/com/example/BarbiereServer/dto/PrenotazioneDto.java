/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.dto;

import com.example.BarbiereServer.model.Prenotazione;

/**
 *
 * @author marco
 */
public class PrenotazioneDto {

    Prenotazione prenotazioneDto;

    public PrenotazioneDto() {
    }

    public PrenotazioneDto(Prenotazione prenotazioneDto) {
        this.prenotazioneDto = prenotazioneDto;
    }

    public Prenotazione getPrenotazioneDto() {
        return prenotazioneDto;
    }

    public void setPrenotazioneDto(Prenotazione prenotazioneDto) {
        this.prenotazioneDto = prenotazioneDto;
    }

    @Override
    public String toString() {
        return "PrenotazioneDto{" + "prenotazioneDto=" + prenotazioneDto + '}';
    }

}
