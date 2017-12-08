class NotasCompartidasModel extends Fronty.Model {

  constructor() {
    super('NotasCompartidasModel'); //call super

    // model attributes
    this.notasCompartidas = [];
  }

  setSelectedNotaCompartida(notaCompartida) {
    this.set((self) => {
      self.selectedNotaCompartida = notaCompartida;
    });
  }

  setNotasCompartidas(notasCompartidas) {
    this.set((self) => {
      self.notasCompartidas = notasCompartidas;
    });
  }
}
