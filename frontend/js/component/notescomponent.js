class NotesComponent extends Fronty.ModelComponent {
  constructor(notesModel, userModel, router) {
    super(Handlebars.templates.notestable, notesModel, null, null);


    this.notesModel = notesModel;
    this.userModel = userModel;
    this.addModel('user', userModel);
    this.router = router;

    this.notesService = new NotesService();

  }

  onStart() {
<<<<<<< HEAD:frontend/js/component/notescomponent.js
    this.updateNotes();
  }

  updateNotes() {
    this.notesService.findAllNotes().then((data) => {

      this.notesModel.setNotes(
=======
    if (this.userModel.isLogged) {
      this.updatePosts();
    }
  }

  updatePosts() {
	  this.postsService.findAllPosts().then((data) => {
		this.postsModel.setPosts(
>>>>>>> b7e14dae8b5c10ba1f6d93e62d07639df402ed7b:frontend/js/component/postscomponent.js
        // create a Fronty.Model for each item retrieved from the backend
        data.map(
          (item) => new NoteModel(item.IdNota, item.nombre, item.contenido, item.autor)
      ));
    });
  }


  // Override
<<<<<<< HEAD:frontend/js/component/notescomponent.js
  createChildModelComponent(className, element, id, modelItem) {
    return new NoteRowComponent(modelItem, this.userModel, this.router, this);
=======
  createChildModelComponent(className, element, idNota, modelItem) {
    return new PostRowComponent(modelItem, this.userModel, this.router, this);
>>>>>>> b7e14dae8b5c10ba1f6d93e62d07639df402ed7b:frontend/js/component/postscomponent.js
  }
}

class NoteRowComponent extends Fronty.ModelComponent {
  constructor(noteModel, userModel, router, notesComponent) {
    super(Handlebars.templates.noterow, noteModel, null, null);

    this.notesComponent = notesComponent;

    this.userModel = userModel;
    this.addModel('user', userModel); // a secondary model

    this.router = router;

    this.addEventListener('click', '.remove-button', (event) => {
      if (confirm(I18n.translate('Are you sure?'))) {
        var IdNota = event.target.getAttribute('item');
        this.notesComponent.notesService.deleteNote(IdNota)
          .fail(() => {
            alert('Note cannot be deleted')
          })
          .always(() => {
            this.notesComponent.updateNotes();
          });
      }
    });

    this.addEventListener('click', '.edit-button', (event) => {
      var IdNota = event.target.getAttribute('item');
      this.router.goToPage('edit-note?IdNota=' + IdNota);
    });
  }

}
