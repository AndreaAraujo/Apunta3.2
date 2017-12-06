<?php
// file: model/User.php

require_once(__DIR__."/../core/ValidationException.php");

/**
* Class User
*
* Represents a User in the blog
*
* @author lipido <lipido@gmail.com>
*/
class User {


  private $IdUsuario
	private $login;
	private $password;
	private $email;

	/**
	* The constructor
	*
	* @param string $username The name of the user
	* @param string $passwd The password of the user
	*/
	public function __construct($IdUsuario=NULL,$login=NULL, $password=NULL, $email = NULL) {
		$this->IdUsuario = $IdUsuario;
		$this->login = $login;
		$this->password = $password;
	}

	/**
	* Gets the username of this user
	*
	* @return string The username of this user
	*/
	public function getLogin() {
		return $this->login;
	}

	/**
	* Sets the username of this user
	*
	* @param string $username The username of this user
	* @return void
	*/
	public function setLogin($login) {
		$this->login = $login;
	}

	/**
	* Gets the password of this user
	*
	* @return string The password of this user
	*/
	public function getPassword() {
		return $this->password;
	}
	/**
	* Sets the password of this user
	*
	* @param string $passwd The password of this user
	* @return void
	*/
	public function setPassword($password) {
		$this->password = $password;
	}

	/**
	* Checks if the current user instance is valid
	* for being registered in the database
	*
	* @throws ValidationException if the instance is
	* not valid
	*
	* @return void
	*/
	public function checkIsValidForRegister() {
		$errors = array();
		if (strlen($this->login) < 5) {
			$errors["login"] = "Username must be at least 5 characters length";

		}
		if (strlen($this->password) < 5) {
			$errors["passwd"] = "Password must be at least 5 characters length";
		}
		if (strlen($this->email) < 5) {
			$errors["email"] = "email must be at least 5 characters length";
		}
		if (sizeof($errors)>0){
			throw new ValidationException($errors, "user is not valid");
		}
	}
}
