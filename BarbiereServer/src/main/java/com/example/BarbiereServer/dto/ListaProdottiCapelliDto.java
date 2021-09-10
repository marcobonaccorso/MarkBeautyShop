/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.dto;

import com.example.BarbiereServer.model.ProdottoCapelli;
import java.util.List;

/**
 *
 * @author marco
 */
public class ListaProdottiCapelliDto {

    List<ProdottoCapelli> listaProdottiCapelliDto;

    public ListaProdottiCapelliDto() {
    }

    public ListaProdottiCapelliDto(List<ProdottoCapelli> listaProdottiCapelliDto) {
        this.listaProdottiCapelliDto = listaProdottiCapelliDto;
    }

    public List<ProdottoCapelli> getListaProdottiCapelliDto() {
        return listaProdottiCapelliDto;
    }

    public void setListaProdottiCapelliDto(List<ProdottoCapelli> listaProdottiCapelliDto) {
        this.listaProdottiCapelliDto = listaProdottiCapelliDto;
    }

    @Override
    public String toString() {
        return "ListaProdottiCapelliDto{" + "listaProdottiCapelliDto=" + listaProdottiCapelliDto + '}';
    }

}
