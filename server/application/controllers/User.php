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
			if($row->u_pass == md5($pwd)){
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
        if($tel==''||$pwd == ''||$pwd1==''){
            echo 'empty';
        }else{
            $rows = $this->User_model->get_user_by_name($tel);
            if(isset($rows)){
                echo 'tel is exist';
            }elseif($pwd == $pwd1){
                $row = $this->User_model->add(array(
                    'u_tel' => $tel,
                    'u_pass' => md5($pwd)
                ));
                if($row > 0){
                    echo 'success';
                }else{
                    echo 'fail';
                }
            }else{
                echo 'pwd error';
            }
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

    //检查是否收藏职位
    public function get_collect_by_u_id_p_id()
    {
        $id = $this->input->get('id');
        $u_id = $this->input->get('u_id');
        $row = $this->User_model->get_collect_by_u_id_p_id($u_id,$id);
        if(count($row)>0 && $row->is_del == "0"){
            echo $row->c_id;
        }else{
            echo 'not exist';
        }
    }

    //删除收藏
    public function del_collect_by_u_id_p_id()
    {
        $c_id = $this->input->get('c_id');
        $row = $this->User_model->del_collect_by_c_id($c_id);
        if($row>0){
            echo 'success';
        }else{
            echo 'fail';

        }
    }


    //收藏职位
    public function collect_position(){
        $u_id = $this->input->get('u_id');
        if($u_id == 'undefined'){
            echo 'not login';
        }else{
            $id = $this->input->get('id');
            $query = $this->User_model->get_collect_by_u_id_p_id($u_id,$id);
            if(count($query)>0 && $query->is_del == "0"){
                $c_id = $query->c_id;
                $res = $this->User_model->update_collect($c_id);
                if($res>0){
                    echo 'success';
                }else{
                    echo 'fail';
                }
            }else{
                $row = $this->User_model->collect_position($u_id,$id);
                if($row>0){
                    echo 'success';
                }else{
                    echo 'fail';
                }
            }
        }
    }

    //搜索职位公司
    public function search_position_or_company()
    {
        $key = $this->input->get('key');
        $result = $this->User_model->search_position_or_company($key);
        if(count($result)>0){
            echo json_encode($result);
        }else{
            echo 'null';
        }
    }

    //我的收藏
    public function get_collect_by_u_id()
    {
        $u_id = $this->input->get('u_id');
        $rows = $this->User_model->get_collect_by_u_id($u_id);
        if(count($rows)>0){
            echo $rows;
        }else{
            echo "fail";
        }
    }

    //我的投递
    public function get_user_position_by_u_id()
    {
        $u_id = $this->input->get('u_id');
        $rows = $this->User_model->get_user_position_by_u_id($u_id);
        if(count($rows)>0){
            echo $rows;
        }else{
            echo "fail";
        }
    }








     
}
?>