class PostsService {
  constructor() {

  }

  findAllPosts() {
    return $.get(AppConfig.backendServer+'/rest/post');
  }

  findPost(IdNota) {
    return $.get(AppConfig.backendServer+'/rest/post/' + IdNota);
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

  deletePost(IdNota) {
    return $.ajax({
      url: AppConfig.backendServer+'/rest/post/' + IdNota,
      method: 'DELETE'
    });
  }

  savePost(post) {
    return $.ajax({
      url: AppConfig.backendServer+'/rest/post/' + post.IdNota,
      method: 'PUT',
      data: JSON.stringify(post),
      contentType: 'application/json'
    });
  }

  addPost(post) {
    return $.ajax({
      url: AppConfig.backendServer+'/rest/post',
      method: 'POST',
      data: JSON.stringify(post),
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
