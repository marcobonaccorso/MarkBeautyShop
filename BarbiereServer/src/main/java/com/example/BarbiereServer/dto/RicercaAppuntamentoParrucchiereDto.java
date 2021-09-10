/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.dto;

/**
 *
 * @author marco
 */
public class RicercaAppuntamentoParrucchiereDto {

    private String ricercaAppuntamentoParrucchiereDto;

    public RicercaAppuntamentoParrucchiereDto() {
    }

    public RicercaAppuntamentoParrucchiereDto(String ricercaAppuntamentoParrucchiereDto) {
        this.ricercaAppuntamentoParrucchiereDto = ricercaAppuntamentoParrucchiereDto;
    }

    public String getRicercaAppuntamentoParrucchiereDto() {
        return ricercaAppuntamentoParrucchiereDto;
    }

    public void setRicercaAppuntamentoParrucchiereDto(String ricercaAppuntamentoParrucchiereDto) {
        this.ricercaAppuntamentoParrucchiereDto = ricercaAppuntamentoParrucchiereDto;
    }

    @Override
    public String toString() {
        return "RicercaAppuntamentoParrucchiereDto{" + "ricercaAppuntamentoParrucchiereDto=" + ricercaAppuntamentoParrucchiereDto + '}';
    }

}
