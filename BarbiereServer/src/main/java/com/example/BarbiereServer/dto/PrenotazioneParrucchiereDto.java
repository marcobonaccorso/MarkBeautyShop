/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.dto;

import com.example.BarbiereServer.model.PrenotazioneParrucchiere;

/**
 *
 * @author marco
 */
public class PrenotazioneParrucchiereDto {
    
   PrenotazioneParrucchiere prenotazioneParrucchiereDto;

    public PrenotazioneParrucchiereDto() {
    }

    public PrenotazioneParrucchiereDto(PrenotazioneParrucchiere prenotazioneParrucchiereDto) {
        this.prenotazioneParrucchiereDto = prenotazioneParrucchiereDto;
    }

    public PrenotazioneParrucchiere getPrenotazioneParrucchiereDto() {
        return prenotazioneParrucchiereDto;
    }

    public void setPrenotazioneParrucchiereDto(PrenotazioneParrucchiere prenotazioneParrucchiereDto) {
        this.prenotazioneParrucchiereDto = prenotazioneParrucchiereDto;
    }

    @Override
    public String toString() {
        return "PrenotazioneParrucchiereDto{" + "prenotazioneParrucchiereDto=" + prenotazioneParrucchiereDto + '}';
    }
   
   
}
