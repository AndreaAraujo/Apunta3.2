class NotasCompartidasComponent extends Fronty.ModelComponent {
  constructor(notasCompartidasModel, userModel, router) {
    super(Handlebars.templates.notasCompartidastable, notasCompartidasModel, null, null);


    this.notasCompartidasModel = notasCompartidasModel;
    this.userModel = userModel;
    this.addModel('user', userModel);
    this.router = router;

    this.notasCompartidasService = new NotasCompartidasService();

  }

  onStart() {
    this.updateNotasCompartidas();
  }

  updateNotasCompartidas() {
    this.notasCompartidasService.findAllNotasCompartidas().then((data) => {

      this.notasCompartidasModel.setNotasCompartidas(
        // create a Fronty.Model for each item retrieved from the backend
        data.map(
          (item) => new NotasCompartidasModel(item.nomUsu, item.idNota)
      ));
    });
  }

  // Override
  createChildModelComponent(className, element, id, modelItem) {
    return new NotasCompartidasRowComponent(modelItem, this.userModel, this.router, this);
  }
}

class NotasCompartidasRowComponent extends Fronty.ModelComponent {
  constructor(notasCompartidasModel, userModel, router, notasCompartidasComponent) {
    super(Handlebars.templates.notascompartidasrow, notasCompartidasModel, null, null);

    this.notasCompartidasComponent = notasCompartidasComponent;

    this.userModel = userModel;
    this.addModel('user', userModel); // a secondary model

    this.router = router;

    this.addEventListener('click', '.remove-button', (event) => {
      if (confirm(I18n.translate('Are you sure?'))) {
        var IdNota = event.target.getAttribute('item');
        this.notasCompartidasComponent.notasCompartidasService.deleteNotaCompartida(idNota)
          .fail(() => {
            alert('note cannot be deleted')
          })
          .always(() => {
            this.notasCompartidasComponent.updateNotasCompartidas();
          });
      }
    });

    this.addEventListener('click', '.edit-button', (event) => {
      var idNota = event.target.getAttribute('item');
      this.router.goToPage('edit-post?IdNota=' + idNota);
    });
  }

}
