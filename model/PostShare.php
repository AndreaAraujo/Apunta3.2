<?php
// file: model/Post.php

/*require_once(__DIR__."/../core/ValidationException.php");


class PostShare {

  private $nomUsu;
	private $idNota;

  public function __construct($nomUsu=NULL, $IdNota=NULL) {
    $this->nomUsu = $nomUsu;
    $this->idNota = $idNota;

  }

  	public function getIdNotaC() {
  		return $this->idNota;
  	}
    public function setIdNotaC($idNota) {
  		$this->idNota = $idNota;
  	}

  	public function getNomUsu() {
  		return $this->nomUsu;
  	}

  	public function setNomUsu($nomUsu) {
  		$this->nomUsu = $nomUsu;
  	}

    public function checkIsValidForShared() {
  		$errors = array();
  		if (strlen(trim($this->nomUsu)) == 0 ) {
  			$errors["nomUsu"] = "nombre is mandatory";
  		}

  		if (sizeof($errors) > 0){
  			throw new ValidationException($errors, "post is not valid");
  		}
  	}


  }*/
