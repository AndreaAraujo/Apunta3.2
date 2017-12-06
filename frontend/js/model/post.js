class PostModel extends Fronty.Model {

  constructor(IdNota, nombre, contenido, Usuario_idUsuario) {
    super('PostModel'); //call super

    if (IdNota) {
      this.IdNota = IdNota;
    }

    if (nombre) {
      this.nombre = nombre;
    }

    if (contenido) {
      this.contenido = contenido;
    }

    if (Usuario_idUsuario) {
      this.Usuario_idUsuario = Usuario_idUsuario;
    }
  }

  setNombre(nombre) {
    this.set((self) => {
      self.nombre = nombre;
    });
  }

  setUsuario_idUsuario(Usuario_idUsuario) {
    this.set((self) => {
      self.Usuario_idUsuario = Usuario_idUsuario;
    });
  }
}
