<?php

require_once(__DIR__."/../model/User.php");
require_once(__DIR__."/../model/UserMapper.php");

require_once(__DIR__."/../model/Post.php");
require_once(__DIR__."/../model/PostMapper.php");

require_once(__DIR__."/../model/NotasCompartidas.php");
require_once(__DIR__."/../model/NotasCompartidasMapper.php");

require_once(__DIR__."/../model/Comment.php");
require_once(__DIR__."/../model/CommentMapper.php");

require_once(__DIR__."/BaseRest.php");

/**
* Class PostRest
*
* It contains operations for creating, retrieving, updating, deleting and
* listing posts, as well as to create comments to posts.
*
* Methods gives responses following Restful standards. Methods of this class
* are intended to be mapped as callbacks using the URIDispatcher class.
*
*/
class PostRest extends BaseRest {
	private $postMapper;
	private $commentMapper;


	public function __construct() {
		parent::__construct();

		$this->postMapper = new PostMapper();
		//$this->commentMapper = new CommentMapper();

	}



	public function getPosts() {
		$posts = $this->postMapper->findAll();

		// json_encode Post objects.
		// since Post objects have private fields, the PHP json_encode will not
		// encode them, so we will create an intermediate array using getters and
		// encode it finally
		$posts_array = array();
		foreach($posts as $post) {
			array_push($posts_array, array(
				"IdNota" => $post->getIdNota(),
				"nombre" => $post->getNombre(),
				"contenido" => $post->getContenido(),
				"autor" => $post->getAutor()->getLogin()
			));
		}

		header($_SERVER['SERVER_PROTOCOL'].' 200 Ok');
		header('Content-Type: application/json');
		echo(json_encode($posts_array));
	}

	public function createPost($data) {
		$currentUser = parent::authenticateUser();
		$post = new Post();

		if (isset($data->nombre) && isset($data->contenido)) {
			$post->setNombre($data->nombre);
			$post->setContenido($data->contenido);

			$post->setAutor($currentUser);
		}

		try {
			// validate Post object
			$post->checkIsValidForCreate(); // if it fails, ValidationException

			// save the Post object into the database
			$IdNota = $this->postMapper->save($post);

			// response OK. Also send post in content
			header($_SERVER['SERVER_PROTOCOL'].' 201 Created');
			header('Location: '.$_SERVER['REQUEST_URI']."/".$IdNota);
			header('Content-Type: application/json');
			echo(json_encode(array(
				"IdNota"=>$IdNota,
				"nombre"=>$post->getNombre(),
				"contenido" => $post->getContenido()
			)));

		} catch (ValidationException $e) {
			header($_SERVER['SERVER_PROTOCOL'].' 400 Bad request');
			header('Content-Type: application/json');
			echo(json_encode($e->getErrors()));
		}
	}

	public function readPost($IdNota) {
		// find the Post object in the database
		$post = $this->postMapper->findById($IdNota);
		if ($post == NULL) {
			header($_SERVER['SERVER_PROTOCOL'].' 400 Bad request');
			echo("Post with id ".$IdNota." not found");
		}

		$post_array = array(
			"IdNota" => $post->getIdNota(),
			"nombre" => $post->getNombre(),
			"contenido" => $post->getContenido(),
			"autor" => $post->getAutor()->getLogin()

		);


		header($_SERVER['SERVER_PROTOCOL'].' 200 Ok');
		header('Content-Type: application/json');
		echo(json_encode($post_array));
	}

	public function updatePost($IdNota, $data) {
		$currentUser = parent::authenticateUser();

		$post = $this->postMapper->findById($IdNota);
		if ($post == NULL) {
			header($_SERVER['SERVER_PROTOCOL'].' 400 Bad request');
			echo("Post with id ".$IdNota." not found");
		}

		// Check if the Post author is the currentUser (in Session)
		if ($post->getAutor() != $currentUser) {
			header($_SERVER['SERVER_PROTOCOL'].' 403 Forbidden');
			echo("you are not the author of this post");
		}
		$post->setNombre($data->nombre);
		$post->setContenido($data->contenido);

		try {
			// validate Post object
			$post->checkIsValidForUpdate(); // if it fails, ValidationException
			$this->postMapper->update($post);
			header($_SERVER['SERVER_PROTOCOL'].' 200 Ok');
		}catch (ValidationException $e) {
			header($_SERVER['SERVER_PROTOCOL'].' 400 Bad request');
			header('Content-Type: application/json');
			echo(json_encode($e->getErrors()));
		}
	}

	public function deletePost($IdNota) {
		$currentUser = parent::authenticateUser();
		$post = $this->postMapper->findById($IdNota);

		if ($post == NULL) {
			header($_SERVER['SERVER_PROTOCOL'].' 400 Bad request');
			echo("Post with id ".$IdNota." not found");
			return;
		}
		// Check if the Post author is the currentUser (in Session)
		if ($post->getAutor() != $currentUser) {
			header($_SERVER['SERVER_PROTOCOL'].' 403 Forbidden');
			echo("you are not the author of this post");
			return;
		}

		$this->postMapper->delete($post);

		header($_SERVER['SERVER_PROTOCOL'].' 204 No Content');
	}

	public function createComment($postId, $data) {
		$currentUser = parent::authenticateUser();

		$post = $this->postMapper->findById($postId);
		if ($post == NULL) {
			header($_SERVER['SERVER_PROTOCOL'].' 400 Bad request');
			echo("Post with id ".$postId." not found");
		}

		$comment = new Comment();
		$comment->setContent($data->content);
		$comment->setAuthor($currentUser);
		$comment->setPost($post);

		try {
			$comment->checkIsValidForCreate(); // if it fails, ValidationException

			$this->commentMapper->save($comment);

			header($_SERVER['SERVER_PROTOCOL'].' 201 Created');

		}catch(ValidationException $e) {
			header($_SERVER['SERVER_PROTOCOL'].' 400 Bad request');
			header('Content-Type: application/json');
			echo(json_encode($e->getErrors()));
		}
	}
}

// URI-MAPPING for this Rest endpoint
$postRest = new PostRest();
URIDispatcher::getInstance()
->map("GET",	"/post", array($postRest,"getPosts"))
->map("GET",	"/post/$1", array($postRest,"readPost"))
->map("POST", "/post", array($postRest,"createPost"))
->map("POST", "/post/$1/comment", array($postRest,"createComment"))
->map("PUT",	"/post/$1", array($postRest,"updatePost"))
->map("DELETE", "/post/$1", array($postRest,"deletePost"));
