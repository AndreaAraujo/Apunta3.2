class PostsService {
  constructor() {

  }

  findAllPosts() {
    return $.get(AppConfig.backendServer+'/rest/post');
  }

  findPost(IdNota) {
    return $.get(AppConfig.backendServer+'/rest/post/' + IdNota);
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

  createShare(postid, share) {
    return $.ajax({
      url: AppConfig.backendServer+'/rest/post/' + postid + '/share',
      method: 'POST',
      data: JSON.stringify(share),
      contentType: 'application/json'
    });
  }

}
