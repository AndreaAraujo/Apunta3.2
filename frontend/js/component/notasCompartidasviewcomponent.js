class NotasCompartidasViewComponent extends Fronty.ModelComponent {
  constructor(notasCompartidasModel, postsModel, userModel, router) {
    super(Handlebars.templates.notasCompartidasview , notasCompartidasModel);

    this.notasCompartidasModel = notasCompartidasModel;
    this.postsModel = postsModel;
    this.userModel = userModel; // global
    this.addModel('user', userModel);
    this.router = router;

    this.NotasCompartidasService = new NotasCompartidasService();

//añadir BOTON DE COMPARTIR
  /*  this.addEventListener('click', '#savecommentbutton', () => {
      var selectedId = this.router.getRouteQueryParam('IdNota');
      this.postsService.createComment(selectedId, {
          content: $('#commentcontent').val()
        })
        .then(() => {
          $('#commentcontent').val('');
          this.loadPost(selectedId);
        })
        .fail((xhr, errorThrown, statusText) => {
          if (xhr.status == 400) {
            this.postsModel.set(() => {
              this.postsModel.commentErrors = xhr.responseJSON;
            });
          } else {
            alert('an error has occurred during request: ' + statusText + '.' + xhr.responseText);
          }
        });
    });*/
  }

  onStart() {
    var selectedId = this.router.getRouteQueryParam('IdNota');
    this.loadPost(selectedId);
  }

  loadNotaCompartida(idNota) {
    if (idNota != null) {
      this.NotasCompartidasService.findNotaCompartida(idNota)
        .then((post) => {
          this.postsModel.setSelectedPost(post);
        });
    }
  }
}
