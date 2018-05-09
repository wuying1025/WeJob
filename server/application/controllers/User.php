<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use \QCloud_WeApp_SDK\Auth\LoginService as LoginService;
use QCloud_WeApp_SDK\Constants as Constants;

class User extends CI_Controller {
    public function index() {
        $result = LoginService::check();

        if ($result['loginState'] === Constants::S_AUTH) {
            $this->json([
                'code' => 0,
                'data' => $result['userinfo']
            ]);
        } else {
            $this->json([
                'code' => -1,
                'data' => []
            ]);
        }
    }
    public function check_login(){
		$pwd = $this->input->get('pwd');
		$name = $this->input->get('name');
        if($name == null){
			echo 'empty';
		}else{
			if($pwd == null){
				echo 'pwd empty';
			}else{
				$result = $this->User_model->get_user_by_name($name);
		if(count($result) == 0){
			echo 'name not exist';
		}else{
			if($result[0]->password == $pwd){
				$this->session->set_userdata(array(
					'user'=>$result[0]
				));
				echo 'success';
			}else{
				echo 'password error';
			}
		}
			}
			
		}
		
	}
     
}
