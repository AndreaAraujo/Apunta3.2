class NoteViewComponent extends Fronty.ModelComponent {
  constructor(notesModel, userModel, router) {
    super(Handlebars.templates.noteview, notesModel);

    this.notesModel = notesModel; // posts
    this.userModel = userModel; // global
    this.addModel('user', userModel);
    this.router = router;

    this.notesService = new NotesService();

<<<<<<< HEAD:frontend/js/component/noteviewcomponent.js
    this.addEventListener('click', '#savesharebutton', () => {
      var selectedId = this.router.getRouteQueryParam('IdNota');
      this.notesService.createShare(selectedId, {
          content: $('#sharecontent').val()
        })
        .then(() => {
          $('#sharecontent').val('');
          this.loadNote(selectedId);
=======
    this.addEventListener('click', '.share-button', () => {
      var user = $('#user').val();
      var selectedId = this.router.getRouteQueryParam('idNota');
      this.postsService.sharePost(selectedId, user)
        .then(() => {
          this.postsModel.set((model) => {
            model.errors = []
          });
          this.router.goToPage('posts');
>>>>>>> b7e14dae8b5c10ba1f6d93e62d07639df402ed7b:frontend/js/component/postviewcomponent.js
        })
        .fail((xhr, errorThrown, statusText) => {
          if (xhr.status == 400) {
            this.notesModel.set(() => {
              this.notesModel.shareErrors = xhr.responseJSON;
            });
          } else {
            alert('an error has occurred during request: ' + statusText + '.' + xhr.responseText);
          }
        });
    });
  }
  /*
  this.addEventListener('click', '.share-button', () => {
    var user = $('#user').val();
    var selectedId = this.router.getRouteQueryParam('idNota');
    this.postsService.sharePost(selectedId, user)
      .then(() => {
        this.postsModel.set((model) => {
          model.errors = []
        });
        this.router.goToPage('posts');
      })
      .fail((xhr, errorThrown, statusText) => {
        if (xhr.status == 400) {
          this.postsModel.set(() => {
            this.postsModel.shareErrors = xhr.responseJSON;
          });
        } else {
          alert('an error has occurred during request: ' + statusText + '.' + xhr.responseText);
        }
      });
  });
}


  */

  onStart() {
    var selectedId = this.router.getRouteQueryParam('IdNota');
    this.loadNote(selectedId);
  }

  loadNote(IdNota) {
    if (IdNota != null) {
      this.notesService.findNote(IdNota)
        .then((note) => {
          this.notesModel.setSelectedNote(note);
        });
    }
  }
}
