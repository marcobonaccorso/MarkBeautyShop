/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer.repository;

import com.example.BarbiereServer.model.PrenotazioneParrucchiere;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author marco
 */
@Repository
public interface PrenotazioneParrucchiereRepository extends JpaRepository<PrenotazioneParrucchiere, Long> {

    PrenotazioneParrucchiere findByCliente(String cliente);

    List<PrenotazioneParrucchiere> findByClienteContains(String c);
}
