<?php

require_once(__DIR__."/../model/User.php");
require_once(__DIR__."/../model/UserMapper.php");

require_once(__DIR__."/../model/Post.php");
require_once(__DIR__."/../model/PostMapper.php");

require_once(__DIR__."/../model/NotasCompartidas.php");
require_once(__DIR__."/../model/NotasCompartidasMapper.php");



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
class NotasCompartidasRest extends BaseRest {
	private $postMapper;

	private $notasCompartidasMapper;

	public function __construct() {
		parent::__construct();

		$this->postMapper = new PostMapper();
		$this->notasCompartidasMapper = new NotasCompartidasMapper();
	}

	public function getNotasCompartidas() {
		$posts = $this->notasCompartidasMapper->findAllNotasCompartidas($currentUser);


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
}

$notacompartidaRest = new NotasCompartidasRest();
URIDispatcher::getInstance()
->map("GET",	"/notaCompartida", array($notacompartidaRest,"getNotasCompartidas"));
