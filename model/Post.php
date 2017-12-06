<?php
// file: model/Post.php

require_once(__DIR__."/../core/ValidationException.php");


class Post {


	private $IdNota;


	private $nombre;


	private $contenido;


	private $Usuario_idUsuario;



	public function __construct($IdNota=NULL, $nombre=NULL, $contenido=NULL, User $Usuario_idUsuario=NULL) {
		$this->IdNota = $IdNota;
		$this->nombre = $nombre;
		$this->contenido = $contenido;
		$this->Usuario_idUsuario = $Usuario_idUsuario;


	}


	public function getIdNota() {
		return $this->IdNota;
	}

	public function getNombre() {
		return $this->nombre;
	}


	public function setNombre($nombre) {
		$this->nombre = $nombre;
	}


	public function getContenido() {
		return $this->contenido;
	}


	public function setContenido($contenido) {
		$this->contenido = $contenido;
	}



	public function getUsuario_idUsuario() {
		return $this->Usuario_idUsuario;
	}


	public function setUsuario_idUsuario(User $Usuario_idUsuario) {
		$this->Usuario_idUsuario = $Usuario_idUsuario;
	}




	public function checkIsValidForCreate() {
		$errors = array();
		if (strlen(trim($this->nombre)) == 0 ) {
			$errors["nombre"] = "nombre is mandatory";
		}
		if (strlen(trim($this->contenido)) == 0 ) {
			$errors["contenido"] = "contenido is mandatory";
		}
		if ($this->Usuario_idUsuario == NULL ) {
			$errors["Usuario_idUsuario"] = "Usuario_idUsuario is mandatory";
		}

		if (sizeof($errors) > 0){
			throw new ValidationException($errors, "post is not valid");
		}
	}


	public function checkIsValidForUpdate() {
		$errors = array();

		if (!isset($this->IdNota)) {
			$errors["IdNota"] = "IdNota is mandatory";
		}

		try{
			$this->checkIsValidForCreate();
		}catch(ValidationException $ex) {
			foreach ($ex->getErrors() as $key=>$error) {
				$errors[$key] = $error;
			}
		}
		if (sizeof($errors) > 0) {
			throw new ValidationException($errors, "post is not valid");
		}
	}
}
