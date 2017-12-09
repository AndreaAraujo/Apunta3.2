class PostShareComponent extends Fronty.ModelComponent {
  constructor(postsModel, userModel, router) {
    super(Handlebars.templates.postview, postsModel);
    this.postsModel = postsModel; // posts
    this.userModel = userModel; // global
    this.addModel('user', userModel);
    this.router = router;

    this.postsService = new PostsService();

    this.addEventListener('click', '#sharebutton', () => {
      var selectedId = this.router.getRouteQueryParam('id');
      this.postsService.sharePost(selectedId, {
          content: $('#sharecontent').val()
        })
        .then(() => {
          $('#sharebutton').val('');
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
    });
  }

  onStart() {
    var selectedId = this.router.getRouteQueryParam('id');
    if (selectedId != null) {
      this.postsService.findPost2(selectedId)
        .then((post) => {
          this.postsModel.setSelectedPost(post);
        });
    }
  }
}
