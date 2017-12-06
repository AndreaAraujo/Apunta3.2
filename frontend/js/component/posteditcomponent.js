class PostEditComponent extends Fronty.ModelComponent {
  constructor(postsModel, userModel, router) {
    super(Handlebars.templates.postedit, postsModel);
    this.postsModel = postsModel; // posts
    this.userModel = userModel; // global
    this.addModel('user', userModel);
    this.router = router;

    this.postsService = new PostsService();

    this.addEventListener('click', '#savebutton', () => {
      this.postsModel.selectedPost.nombre = $('#nombre').val();
      this.postsModel.selectedPost.contenido = $('#contenido').val();
      this.postsService.savePost(this.postsModel.selectedPost)
        .then(() => {
          this.postsModel.set((model) => {
            model.errors = []
          });
          this.router.goToPage('posts');
        })
        .fail((xhr, errorThrown, statusText) => {
          if (xhr.status == 400) {
            this.postsModel.set((model) => {
              model.errors = xhr.responseJSON;
            });
          } else {
            alert('an error has occurred during request: ' + statusText + '.' + xhr.responseText);
          }
        });

    });
  }

  onStart() {
    var selectedId = this.router.getRouteQueryParam('IdNota');
    if (selectedId != null) {
      this.postsService.findPost(selectedId)
        .then((post) => {
          this.postsModel.setSelectedPost(post);
        });
    }
  }
}
