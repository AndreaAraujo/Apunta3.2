class LoginComponent extends Fronty.ModelComponent {
  constructor(userModel, router) {
    super(Handlebars.templates.login, userModel);
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

    this.addEventListener('click', '#registerlink', () => {
       this.usuarioModel.set(() => {
         this.usuarioModel.registerMode = true;
       });
     });

     this.addEventListener('click', '#registerbutton', () => {
       this.usuarioService.register({
           login: $('#registroNombre').val(),
           email: $('#registroEmail').val(),
           password: $('#registroPassword').val()
         })
         .then(() => {
           alert(I18n.translate('User registered! Please login'));
           this.usuarioService.set((model) => {
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
             alert('an error has occurred during request: ' + statusText + '.' + xhr.responseText);
           }
         });
     });
   }
 }
