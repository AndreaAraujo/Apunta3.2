class PostSharedComponent extends Fronty.ModelComponent {
  constructor(postsModel, userModel, router) {
    super(Handlebars.templates.postsharedtable, postsModel, null, null);
    this.postsModel = postsModel;
    this.userModel = userModel;
    this.addModel('user', userModel);
    this.router = router;

    this.postsService = new PostsService();

	this.addEventListener('click', '.remove-button', (event) => {
      if (confirm(I18n.translate('Are you sure?'))) {
        var idNotaC = event.target.getAttribute('item'); alert(idNotaC);
        this.postsService.deletePost(idNotaC)
          .fail(() => {
            alert('note cannot be deleted')
          })
          .always(() => {
            this.updatePosts();
          });
      }
    });

	this.userModel.addObserver(() => {
		if (this.userModel.isLogged) {
			this.updatePosts();
		}
	});

  }

  onStart() {
	  if (this.userModel.isLogged) {
		this.updatePosts();
	  }
  }

  updatePosts() {
	  this.postsService.findShared().then((data) => {
		this.postsModel.setPosts(
        // create a Fronty.Model for each item retrieved from the backend
        data.map(
          (item) => new PostModel(item.idNota, item.nombre, item.autor)
      ));
    });
  }



}
