/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.model;

import java.io.Serializable;
import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 *
 * @author marco
 */
@Entity
public class PrenotazioneParrucchiere implements Serializable {
     @Id
    @GeneratedValue
    private Long id;
    @Column
    private String cliente;
    @Column
    private LocalDate dataPrenotazione;
    @Column
    private String ora;
    @Column
    private String tipoDiServizio;

    public PrenotazioneParrucchiere(String cliente, LocalDate dataPrenotazione, String ora, String tipoDiServizio) {
        this.cliente = cliente;
        this.dataPrenotazione = dataPrenotazione;
        this.ora = ora;
        this.tipoDiServizio = tipoDiServizio;
    }

    public PrenotazioneParrucchiere() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCliente() {
        return cliente;
    }

    public void setCliente(String cliente) {
        this.cliente = cliente;
    }

    public LocalDate getDataPrenotazione() {
        return dataPrenotazione;
    }

    public void setDataPrenotazione(LocalDate dataPrenotazione) {
        this.dataPrenotazione = dataPrenotazione;
    }

    public String getOra() {
        return ora;
    }

    public void setOra(String ora) {
        this.ora = ora;
    }

    public String getTipoDiServizio() {
        return tipoDiServizio;
    }

    public void setTipoDiServizio(String tipoDiServizio) {
        this.tipoDiServizio = tipoDiServizio;
    }

    @Override
    public String toString() {
        return "PrenotazioneParrucchiere{" + "id=" + id + ", cliente=" + cliente + ", dataPrenotazione=" + dataPrenotazione + ", ora=" + ora + ", tipoDiServizio=" + tipoDiServizio + '}';
    }
    
    
}
