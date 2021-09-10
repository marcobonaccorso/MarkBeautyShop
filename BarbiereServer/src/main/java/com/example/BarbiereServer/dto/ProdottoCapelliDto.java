/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.dto;

import com.example.BarbiereServer.model.ProdottoCapelli;

/**
 *
 * @author marco
 */
public class ProdottoCapelliDto {

    ProdottoCapelli prodottoCapelliDto;

    public ProdottoCapelliDto() {
    }

    public ProdottoCapelliDto(ProdottoCapelli prodottoCapelliDto) {
        this.prodottoCapelliDto = prodottoCapelliDto;
    }

    public ProdottoCapelli getProdottoCapelliDto() {
        return prodottoCapelliDto;
    }

    public void setProdottoCapelliDto(ProdottoCapelli prodottoCapelliDto) {
        this.prodottoCapelliDto = prodottoCapelliDto;
    }

    @Override
    public String toString() {
        return "ProdottoCapelliDto{" + "prodottoCapelliDto=" + prodottoCapelliDto + '}';
    }

}
