class PostViewComponent extends Fronty.ModelComponent {
  constructor(postsModel, userModel, router) {
    super(Handlebars.templates.postview, postsModel);

    this.postsModel = postsModel; // posts
    this.userModel = userModel; // global
    this.addModel('user', userModel);
    this.router = router;

    this.postsService = new PostsService();

    this.addEventListener('click', '#savesharebutton', () => {
      var selectedId = this.router.getRouteQueryParam('IdNota');
      this.postsService.createShare(selectedId, {
          content: $('#sharecontent').val()
        })
        .then(() => {
          $('#sharecontent').val('');
          this.loadPost(selectedId);
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

  onStart() {
    var selectedId = this.router.getRouteQueryParam('IdNota');
    this.loadPost(selectedId);
  }

  loadPost(IdNota) {
    if (IdNota != null) {
      this.postsService.findPost(IdNota)
        .then((post) => {
          this.postsModel.setSelectedPost(post);
        });
    }
  }
}
