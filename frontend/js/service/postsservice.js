class PostsService {
  constructor() {

  }

  findAllPosts() {
    return $.get(AppConfig.backendServer+'/rest/post');
  }

  findPost(IdNota) {
    return $.get(AppConfig.backendServer+'/rest/post/' + IdNota);
  }

  findPostShared() {
	return $.get(AppConfig.backendServer+'/rest/shared');
  }

  findPostS(IdNota) {alert(IdNota+ " ");
    return $.get(AppConfig.backendServer+'/rest/share/' + IdNota);
  }

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

  sharePost(IdNota, user) {
    return $.ajax({
      url: AppConfig.backendServer+'/rest/post/' + IdNota + '/share',
      method: 'POST',
      data: JSON.stringify(share),
      contentType: 'application/json'
    });
  }

}
