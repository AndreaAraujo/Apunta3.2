class NotesService {
  constructor() {

  }

  findAllNotes() {
    return $.get(AppConfig.backendServer+'/rest/note');
  }

  findNote(IdNota) {
    return $.get(AppConfig.backendServer+'/rest/note/' + IdNota);
  }

<<<<<<< HEAD
/*  findPostShared() {
	return $.get(AppConfig.backendServer+'/rest/shared');
}*/

/*  findPostS(IdNota) {alert(IdNota+ " ");
    return $.get(AppConfig.backendServer+'/rest/share/' + IdNota);
  }*/
=======
  findPostShared() {
	return $.get(AppConfig.backendServer+'/rest/shared');
  }

  findPostS(IdNota) {alert(IdNota+ " ");
    return $.get(AppConfig.backendServer+'/rest/share/' + IdNota);
  }
>>>>>>> 3cc79e4d8316b49d2da158312c913d11b75b2668

  deleteNote(IdNota) {
    return $.ajax({
      url: AppConfig.backendServer+'/rest/note/' + IdNota,
      method: 'DELETE'
    });
  }

  saveNote(note) {
    return $.ajax({
      url: AppConfig.backendServer+'/rest/note/' + note.IdNota,
      method: 'PUT',
      data: JSON.stringify(note),
      contentType: 'application/json'
    });
  }

  addNote(note) {
    return $.ajax({
      url: AppConfig.backendServer+'/rest/note',
      method: 'POST',
      data: JSON.stringify(note),
      contentType: 'application/json'
    });
  }
<<<<<<< HEAD
/*
=======

>>>>>>> 3cc79e4d8316b49d2da158312c913d11b75b2668
  sharePost(IdNota, user) {
    return $.ajax({
      url: AppConfig.backendServer+'/rest/post/' + IdNota + '/share',
      method: 'POST',
      data: JSON.stringify(share),
      contentType: 'application/json'
    });
  }*/

}
