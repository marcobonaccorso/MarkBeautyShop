/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.BarbiereServer;

import com.example.BarbiereServer.model.Prenotazione;
import com.example.BarbiereServer.repository.PrenotazioneRepository;
import java.time.LocalDate;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

/**
 *
 * @author marco
 */
@SpringBootTest
public class PrenotazioneUomoTest {

    @Autowired
    PrenotazioneRepository PrenotazioneRepository;

    @Test
    void testPrenotazioneUomo() {

        Prenotazione p1 = new Prenotazione("Enrico Serafini", LocalDate.now(), "ora", "Rasatura capelli a macchinetta,Rasatura barba a lametta");
        PrenotazioneRepository.save(p1);
        Prenotazione p2 = new Prenotazione("Gabriele Pacchiarotti", LocalDate.now(), "ora", "taglio");
        PrenotazioneRepository.save(p2);
        Prenotazione p3 = new Prenotazione("Giosué Vallebona", LocalDate.now(), "ora", "Taglio + Shampoo");
        PrenotazioneRepository.save(p3);
        Prenotazione p4 = new Prenotazione("Daniele Moscioni", LocalDate.now(), "ora", "Rasatura capelli a macchinetta, Trattamento barba");
        PrenotazioneRepository.save(p4);
        Prenotazione p5 = new Prenotazione("Valentino Doncu", LocalDate.now(), "ora", "Taglio + Shampoo, Sfoltitura barba");
        PrenotazioneRepository.save(p5);
        Prenotazione p6 = new Prenotazione("Brian Sabino", LocalDate.now(), "ora", "Taglio + Shampoo, sfoltitura barba");
        PrenotazioneRepository.save(p6);
        Prenotazione p7 = new Prenotazione("Maurizio Serafini", LocalDate.now(), "ora", "Taglio + Shampoo, Trattamento alla barba");
        PrenotazioneRepository.save(p7);
        Prenotazione p8 = new Prenotazione("Luca Lezzerini", LocalDate.now(), "ora", "Rasatura capelli a lametta, Rasatura barba a lametta");
        PrenotazioneRepository.save(p8);
        Prenotazione p9 = new Prenotazione("Stefano Spagnolo", LocalDate.now(), "ora", "Taglio");
        PrenotazioneRepository.save(p9);
        Prenotazione p10 = new Prenotazione("Carlos Sandoval", LocalDate.now(), "ora", "taglio + shampoo,Rasatura barba a lametta,Disegno sopracciglie");
        PrenotazioneRepository.save(p10);
    }
}
