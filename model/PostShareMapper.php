<?php
// file: model/PostMapper.php
/*require_once(__DIR__."/../core/PDOConnection.php");

require_once(__DIR__."/../model/PostShare.php");



class PostShareMapper {

	private $db;

	public function __construct() {
		$this->db = PDOConnection::getInstance();
	}


  /*Buscar notas compartidas con el ususario logeado
  public function findShared($nombreUsuario) {
    $stmt = $this->db->prepare("SELECT * FROM notas_compartidas, notas ,usuario WHERE notas_compartidas.nomUsu =? and  notas_compartidas.idNota = notas.IdNota and usuario.login = notas.autor ");
    $stmt->execute(array($nombreUsuario));
    $posts_db = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $posts = array();

    foreach ($posts_db as $post) {
      $autor = new User($post["login"]);
      array_push($posts, new Post($post["IdNota"], $post["nombre"], $post["contenido"], $autor));
    }

    return $posts;
  }

  public function save(PostShared $post) {
    $stmt = $this->db->prepare("INSERT INTO notas_compartidas(nomUsu, idNota) values (?,?)");
    $stmt->execute(array($post->getNomUsu(), $post->getIdNota()));

  }



}*/
