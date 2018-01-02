<?php
// file: model/PostMapper.php
require_once(__DIR__."/../core/PDOConnection.php");

require_once(__DIR__."/../model/User.php");
require_once(__DIR__."/../model/Post.php");

class PostMapper {

	/**
	* Reference to the PDO connection
	* @var PDO
	*/
	private $db;

	public function __construct() {
		$this->db = PDOConnection::getInstance();
	}


	public function findAll() {
		$stmt = $this->db->query("SELECT * FROM nota, usuario WHERE usuario.login = nota.autor");
		$posts_db = $stmt->fetchAll(PDO::FETCH_ASSOC);

		$posts = array();

		foreach ($posts_db as $post) {
			$author = new User($post["login"]);
			array_push($posts, new Post($post["IdNota"], $post["nombre"], $post["contenido"], $author));
		}

		return $posts;
	}


	public function findById($IdNota){
		$stmt = $this->db->prepare("SELECT * FROM nota WHERE IdNota=?");
		$stmt->execute(array($IdNota));
		$post = $stmt->fetch(PDO::FETCH_ASSOC);

		if($post != null) {
			return new Post(
			$post["IdNota"],
			$post["nombre"],
			$post["contenido"],
			new User($post["autor"]));
		} else {
			return NULL;
		}
	}
	public function findPostShared($nombreUsuario) {
    $stmt = $this->db->prepare("SELECT * FROM notas_compartidas, nota ,usuario WHERE notas_compartidas.nomUsu =? and  notas_compartidas.IdNota = nota.IdNota and usuario.login = nota.autor ");
    $stmt->execute(array($nombreUsuario));

    $posts_db = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $posts = array();

    foreach ($posts_db as $post) {
      $autor = new User($post["login"]);
      array_push($posts, new Post($post["IdNota"], $post["nombre"], $post["contenido"], $autor));
    }

    return $posts;
  }




		public function save(Post $post) {
			$stmt = $this->db->prepare("INSERT INTO nota(nombre, contenido, autor) values (?,?,?)");
			$stmt->execute(array($post->getNombre(), $post->getContenido(), $post->getAutor()->getLogin()));
			return $this->db->lastInsertId();
		}


		public function update(Post $post) {
			$stmt = $this->db->prepare("UPDATE nota set nombre=?, contenido=? where IdNota=?");
			$stmt->execute(array($post->getNombre(), $post->getContenido(), $post->getIdNota()));
		}



		public function delete(Post $post) {
			$stmt = $this->db->prepare("DELETE from nota WHERE IdNota=?");
			$stmt->execute(array($post->getIdNota()));
		}
		public function share(PostShared $post) {
	    $stmt = $this->db->prepare("INSERT INTO notas_compartidas(nomUsu, IdNota) values (?,?)");
	    $stmt->execute(array($post->getNomUsu(), $post->getIdNota()));
			return $this->db->lastInsertId();
	  }

		/*
		public function findPostShared($nombreUsuario) {
			$stmt = $this->db->prepare("SELECT * FROM notas_compartidas, nota ,usuario WHERE notas_compartidas.nomUsu =? and  notas_compartidas.IdNota = nota.IdNota and usuario.login = nota.autor ");
			$stmt->execute(array($nombreUsuario));

			$posts_db = $stmt->fetchAll(PDO::FETCH_ASSOC);

			$posts = array();

			foreach ($posts_db as $post) {
				$autor = new User($post["login"]);
				array_push($posts, new Post($post["IdNota"], $post["nombre"], $post["contenido"], $autor));
			}

			return $posts;
		}

		public function share(PostShared $post) {
	    $stmt = $this->db->prepare("INSERT INTO notas_compartidas(nomUsu, IdNota) values (?,?)");
	    $stmt->execute(array($post->getNomUsu(), $post->getIdNota()));
			return $this->db->lastInsertId();
	  }


		*/

	}
