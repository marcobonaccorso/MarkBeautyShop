aggiorna() {
    this.http.get<ListaAppuntamentiDto>(this.url + aggiorna
    ).subscribe(c =>
      this.prenotazioni = c.listaAppuntamentiDto
    );
  }

  aggiungiAppuntamento() {

    let dto = new AppuntamentoDto();
    dto.appuntamentoDto = this.prenotazione;
    this.http.post<ListaAppuntamentiDto>(this.url + "aggiungi"
      , dto).subscribe(c =>
        this.prenotazioni = c.listaAppuntamentiDto
      );

  }

  eliminaAppuntamento(p: Appuntamento{
    let dto = new AppuntamentoDto();
    dto.appuntamentoDto = p;
    this.http.post<ListaAppuntamentiDto>(this.url + "aggiungi"
      , dto).subscribe(c =>
        this.prenotazioni = c.listaAppuntamentiDto
      );
  }