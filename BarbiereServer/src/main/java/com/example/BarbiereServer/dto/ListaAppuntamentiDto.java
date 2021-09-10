/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.dto;

import com.example.BarbiereServer.model.Appuntamento;
import java.util.List;

/**
 *
 * @author marco
 */
public class ListaAppuntamentiDto {

    List <Appuntamento> listaAppuntamentiDto;

    public ListaAppuntamentiDto() {
    }

    public ListaAppuntamentiDto(List<Appuntamento> listaAppuntamentiDto) {
        this.listaAppuntamentiDto = listaAppuntamentiDto;
    }

    public List<Appuntamento> getListaAppuntamentiDto() {
        return listaAppuntamentiDto;
    }

    public void setListaAppuntamentiDto(List<Appuntamento> listaAppuntamentiDto) {
        this.listaAppuntamentiDto = listaAppuntamentiDto;
    }

    @Override
    public String toString() {
        return "ListaAppuntamentiDto{" + "listaAppuntamentiDto=" + listaAppuntamentiDto + '}';
    }

    

}
