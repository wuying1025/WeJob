<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use \QCloud_WeApp_SDK\Auth\LoginService as LoginService;
use QCloud_WeApp_SDK\Constants as Constants;

class User extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
		$this->load->model('User_model');
		
	}
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
		$tel = $this->input->get('tel');
		$pwd = $this->input->get('pwd');
        if($tel == null){
			echo 'empty';
		}else{
			if($pwd == null){
				echo 'pwd empty';
			}else{
				$row = $this->User_model->get_user_by_name($tel);
		if(!isset($row)){
			echo 'name not exist';
		}else{
			if($row->u_pass == $pwd){
				echo json_encode($row);
			}else{
				echo 'password error';
			}
		}
			}
			
		}
		
	}


	public function add_user(){     //注册
		$tel = $this->input->get('name');
		$pwd = $this->input->get('pwd');
		$pwd1 = $this->input->get('pwd1');

		
		if($pwd != $pwd1){
			echo 'pwd-error';
			die();
		}

		$rows = $this->User_model->add(array(
			'u_pass'=>$pwd,
			'u_tel'=>$tel
		));
		if($rows >0){
			echo 'success';
		}else{
			echo 'fail';
		}
	}

	public function add_cv1(){

        $name = $this->input->get('name');
		$sex = $this->input->get('sex');
		$bir = $this->input->get('bir');
		$school = $this->input->get('u_school');
		$pos = $this->input->get('pos');
		$tel = $this->input->get('tel');
		$email = $this->input->get('email');
		$id = $this->input->get('id');
	//取一下ID

		$row = $this->User_model->check_pos($id);
		if(!isset($row)){
			$rows = $this->User_model->add_insert(array(
			'r_name'=>$name,
			'r_sex'=>$sex,
			'r_bir'=>$bir,
			'r_school'=>$school,
			'r_job'=>$pos,
			'r_tel'=>$tel,
			'r_email'=>$email,
			'u_id'=>$id
		));
		}else{
			// $message = new StdClass();
			// $message->r_name=$name;
			// $message->r_sex=$sex;
			// $message->r_bir=$bir;
			// $message->r_school=$school;
			// $message->r_job=$job;
			// $message->r_tel=$tel;
			// $message->r_email=$email;
			$rows = $this->User_model->add_updata(array(
				'r_name'=>$name,
				'r_sex'=>$sex,
				'r_bir'=>$bir,
				'r_school'=>$school,
				'r_job'=>$pos,
				'r_tel'=>$tel,
				'r_email'=>$email,


			),$id);

		}

		

	 }
	 public function add_cv2(){
		
				$tallest = $this->input->get('tallest');
				$time = $this->input->get('time');
				$job = $this->input->get('job');
				$school = $this->input->get('school');
				 
			//取一下ID
	            
				$row = $this->User_model->check_user($id);
				if($row > 0){
					$rows = $this->User_model->add_insert(array(
					'r_name'=>$name,
					'r_sex'=>$sex,
					'r_bir'=>$bir,
					'r_school'=>$school
				));
				}else{
					$message = new StdClass();
					$message->r_name=$name;
					$message->r_sex=$sex;
					$message->r_bir=$bir;
					$message->r_school=$school;
					$message->r_job=$job;
					$message->r_tel=$tel;
					$message->r_email=$email;
					$rows = $this->User_model->add_updata($message);
		
				}
			 }
     public function get_full_message(){
    				$row = $this->User_model->get_full_message();
              echo json_encode($row);
          }

          public function get_study_message(){
          $row = $this->User_model->get_study_message();
            echo json_encode($row);
        }

        public function get_pos_message(){
          $id = $this->input->get('id');
          $row = $this->User_model->get_pos_by_id($id);
          echo json_encode($row);
      	}


     
}
?>