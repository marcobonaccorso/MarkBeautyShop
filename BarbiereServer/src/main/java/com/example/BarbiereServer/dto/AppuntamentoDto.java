/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.dto;

import com.example.BarbiereServer.model.Appuntamento;

/**
 *
 * @author marco
 */
public class AppuntamentoDto {

    Appuntamento appuntamentoDto;

    public AppuntamentoDto() {
    }

    public AppuntamentoDto(Appuntamento appuntamentoDto) {
        this.appuntamentoDto = appuntamentoDto;
    }

    public Appuntamento getAppuntamentoDto() {
        return appuntamentoDto;
    }

    public void setAppuntamentoDto(Appuntamento appuntamentoDto) {
        this.appuntamentoDto = appuntamentoDto;
    }

    @Override
    public String toString() {
        return "AppuntamentoDto{" + "appuntamentoDto=" + appuntamentoDto + '}';
    }

}
