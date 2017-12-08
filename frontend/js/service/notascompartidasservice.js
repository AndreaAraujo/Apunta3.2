class NotasCompartidasService {
  constructor() {

  }

  findAllNotasCompartidas() {
    return $.get(AppConfig.backendServer+'/rest/post');
  }

  findNotaCompartida() {
    return $.get(AppConfig.backendServer+'/rest/notaCompartida');
  }
/*
  deleteNotaCompartida(idNota) {
    return $.ajax({
      url: AppConfig.backendServer+'/rest/post/' + idNota,
      method: 'DELETE'
    });
  }

  saveNotaCompartida(post) {
    return $.ajax({
      url: AppConfig.backendServer+'/rest/post/' + post.IdNota,
      method: 'PUT',
      data: JSON.stringify(post),
      contentType: 'application/json'
    });
  }

  addNotaCompartida(post) {
    return $.ajax({
      url: AppConfig.backendServer+'/rest/post',
      method: 'POST',
      data: JSON.stringify(post),
      contentType: 'application/json'
    });
  }

  createComment(postid, comment) {
    return $.ajax({
      url: AppConfig.backendServer+'/rest/post/' + postid + '/comment',
      method: 'POST',
      data: JSON.stringify(comment),
      contentType: 'application/json'
    });
  }*/

}
