class NotaCompartidaModel extends Fronty.Model {

  constructor(nomUsu, idNota) {
    super('NotaCompartidaModel'); //call super

    if (idNota) {
      this.idNota = idNota;
    }

    if (nomUsu) {
      this.nomUsu = nomUsu;
    }


  }

  setNomUsu(nomUsu) {
    this.set((self) => {
      self.nomUsu = nomUsu;
    });
  }

  setIdNota(idNota) {
    this.set((self) => {
      self.idNota = idNota;
    });
  }
}
