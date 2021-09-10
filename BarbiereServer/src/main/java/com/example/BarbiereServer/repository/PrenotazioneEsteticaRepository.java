/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.repository;

import com.example.BarbiereServer.model.PrenotazioneEstetica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author marco
 */
@Repository
public interface PrenotazioneEsteticaRepository extends JpaRepository<PrenotazioneEstetica, Long> {
    
    PrenotazioneEstetica findByCliente(String cliente);
}
