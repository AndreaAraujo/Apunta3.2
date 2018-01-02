/* Main mvcblog-front script */

//load external resources
function loadTextFile(url) {
  return new Promise((resolve, reject) => {
    $.get({
      url: url,
      cache: true,
      dataType: 'text'
    }).then((source) => {
      resolve(source);
    }).fail(() => reject());
  });
}


// Configuration
var AppConfig = {
  backendServer: 'http://localhost/Apunta3.2'
  //backendServer: '/mvcblog'
}

Handlebars.templates = {};
Promise.all([
<<<<<<< HEAD
  I18n.initializeCurrentLanguage('js/i18n'),
   loadTextFile('templates/components/main.hbs').then((source) =>
     Handlebars.templates.main = Handlebars.compile(source)),
   loadTextFile('templates/components/language.hbs').then((source) =>
     Handlebars.templates.language = Handlebars.compile(source)),
   loadTextFile('templates/components/user.hbs').then((source) =>
     Handlebars.templates.user = Handlebars.compile(source)),
   loadTextFile('templates/components/login.hbs').then((source) =>
     Handlebars.templates.login = Handlebars.compile(source)),
   loadTextFile('templates/components/posts-table.hbs').then((source) =>
     Handlebars.templates.poststable = Handlebars.compile(source)),
   loadTextFile('templates/components/post-edit.hbs').then((source) =>
     Handlebars.templates.postedit = Handlebars.compile(source)),
   loadTextFile('templates/components/post-view.hbs').then((source) =>
     Handlebars.templates.postview = Handlebars.compile(source)),
   loadTextFile('templates/components/post-row.hbs').then((source) =>
     Handlebars.templates.postrow = Handlebars.compile(source))/*,
   loadTextFile('templates/components/postshared-table.hbs').then((source) =>
     Handlebars.templates.postsharedtable = Handlebars.compile(source)),
   loadTextFile('templates/components/post-share.hbs').then((source) =>
     Handlebars.templates.postshare = Handlebars.compile(source))*/
=======
   I18n.initializeCurrentLanguage('js/i18n'),
    loadTextFile('templates/components/main.hbs').then((source) =>
      Handlebars.templates.main = Handlebars.compile(source)),
    loadTextFile('templates/components/language.hbs').then((source) =>
      Handlebars.templates.language = Handlebars.compile(source)),
    loadTextFile('templates/components/user.hbs').then((source) =>
      Handlebars.templates.user = Handlebars.compile(source)),
    loadTextFile('templates/components/login.hbs').then((source) =>
      Handlebars.templates.login = Handlebars.compile(source)),
    loadTextFile('templates/components/posts-table.hbs').then((source) =>
      Handlebars.templates.poststable = Handlebars.compile(source)),
    loadTextFile('templates/components/post-edit.hbs').then((source) =>
      Handlebars.templates.postedit = Handlebars.compile(source)),
    loadTextFile('templates/components/post-view.hbs').then((source) =>
      Handlebars.templates.postview = Handlebars.compile(source)),
    loadTextFile('templates/components/post-row.hbs').then((source) =>
      Handlebars.templates.postrow = Handlebars.compile(source)),
    loadTextFile('templates/components/postshared-table.hbs').then((source) =>
      Handlebars.templates.postsharedtable = Handlebars.compile(source)),
    loadTextFile('templates/components/post-share.hbs').then((source) =>
      Handlebars.templates.postshare = Handlebars.compile(source))

>>>>>>> 3cc79e4d8316b49d2da158312c913d11b75b2668
  ])
  .then(() => {
    $(() => {
      new MainComponent().start();
    });
  }).catch((err) => {
    alert('FATAL: could not start app ' + err);
  });
