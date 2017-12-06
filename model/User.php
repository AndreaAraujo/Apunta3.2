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


	private $login;
	private $password;
	private $email;

	/**
	* The constructor
	*
	* @param string $username The name of the user
	* @param string $passwd The password of the user
	*/
	public function __construct($login=NULL, $password=NULL, $email = NULL) {
		
		$this->login = $login;
		$this->password = $password;
    $this->email = $email;
	}

	/**
	* Gets the username of this user
	*
	* @return string The username of this user
	*/
	public function getLogin() {
		return $this->login;
	}

	public function setLogin($login) {
		$this->login = $login;
	}


	public function getPassword() {
		return $this->password;
	}

	public function setPassword($password) {
		$this->password = $password;
	}

  public function getEmail() {
		return $this->email;
	}

	public function setEmail($email) {
		$this->email = $email;
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
			$errors["password"] = "Password must be at least 5 characters length";
		}
		if (strlen($this->email) < 5) {
			$errors["email"] = "email must be at least 5 characters length";
		}
		if (sizeof($errors)>0){
			throw new ValidationException($errors, "user is not valid");
		}
	}
}
