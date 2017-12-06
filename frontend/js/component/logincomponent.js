class LoginComponent extends Fronty.ModelComponent {
  constructor(usuarioModel, router) {
    super(Handlebars.templates.login, usuarioModel);
    this.usuarioModel = UserModel;
    this.usuarioService = new UserService();
    this.router = router;

    this.addEventListener('click', '#loginbutton', (event) => {
      this.usuarioService.login($('#nombreLogin').val(), $('#password').val())
        .then(() => {
          this.router.goToPage('posts');
          this.usuarioModel.setLoggeduser($('#nombreLogin').val());
        })
        .catch(() => {
          this.usuarioModel.logout();
        });
    });

    this.addEventListener('click', '#btnNuevoRegistro', () => {
      this.usuarioModel.set(() => {
        this.usuarioModel.registerMode = true;
      });
    });

    this.addEventListener('click', '#btnRegistro', () => {
      this.usuarioService.register({
          login: $('#registroNombre').val(),
          password: $('#registroPassword').val(),
          email: $('#registroEmail').val()
        })
        .then(() => {
          alert(I18n.translate('Usuario registrado! logeate'));
          this.usuarioModel.set((model) => {
            model.registerErrors = {};
            model.registerMode = false;
          });
        })
        .fail((xhr, errorThrown, statusText) => {
          if (xhr.status == 400) {
            this.usuarioModel.set(() => {
              this.usuarioModel.registerErrors = xhr.responseJSON;
            });
          } else {
            alert('un error ha ocurrido durante la solicitud: ' + statusText + '.' + xhr.responseText);
          }
        });
    });
  }
}
