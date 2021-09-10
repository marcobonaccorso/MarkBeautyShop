/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer;

import com.example.BarbiereServer.repository.AppuntamentoRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author marco
 */
public class AppuntamentoUomoTest {

    @Autowired
    AppuntamentoRepository appuntamentoRepository;

    @Test
    void testAppuntamentoUomo() {

    }

    /*
     * 
     *  Prenotazione p1 = new Prenotazione("Enrico Serafini", LocalDate.now(), "ora", "Rasatura capelli a macchinetta,Rasatura barba a lametta");
        Prenotazione p2 = new Prenotazione("Gabriele Pacchiarotti", LocalDate.now(), "ora", "taglio");
        Prenotazione p3 = new Prenotazione("Giosué Vallebona", LocalDate.now(), "ora", "Taglio + Shampoo");
        Prenotazione p4 = new Prenotazione("Daniele Moscioni", LocalDate.now(), "ora", "Rasatura capelli a macchinetta, Trattamento barba");
        Prenotazione p5 = new Prenotazione("Valentino Doncu", LocalDate.now(), "ora", "Taglio + Shampoo, Sfoltitura barba");
        Prenotazione p6 = new Prenotazione("Brian Sabino", LocalDate.now(), "ora", "Taglio + Shampoo, sfoltitura barba");
        Prenotazione p7 = new Prenotazione("Maurizio Serafini", LocalDate.now(), "ora", "Taglio + Shampoo, Trattamento alla barba");
        Prenotazione p8 = new Prenotazione("Luca Lezzerini", LocalDate.now(), "ora", "Rasatura capelli a lametta, Rasatura barba a lametta");
        Prenotazione p9 = new Prenotazione("Stefano Spagnolo", LocalDate.now(), "ora", "Taglio");
        Prenotazione p10 = new Prenotazione("Enrico Serafini", LocalDate.now(), "ora", "taglio + shampoo,Rasatura barba a lametta,Disegno sopracciglie");
     */
}
