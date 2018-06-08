<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class HR extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('HR_model');
        $this->load->model('User_model');
    }
	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$this->load->view('welcome_message');
	}

	//hr注册
    public function hr_reg(){
        $tel = $this->input->get('name');
        $pwd = $this->input->get('pwd');
        $pwd1 = $this->input->get('pwd1');
        if($tel==''||$pwd == ''||$pwd1==''){
            echo 'empty';
        }else{
            $rows = $this->HR_model->check_hr_login($tel);
            if(isset($rows)){
                echo 'tel is exist';
            }elseif($pwd == $pwd1){
                $row = $this->HR_model->hr_reg(array(
                    'hr_tel' => $tel,
                    'hr_pass' => md5($pwd)
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

    //hr 登录
    public function check_hr_login()
    {
        $tel = $this->input->get('tel');
        $pwd = $this->input->get('pwd');
        $result = $this->HR_model->check_hr_login($tel);
        if(count($result)==0){
            echo 'tel not exist';
        }else if($result->hr_pass == md5($pwd)) {
            echo json_encode($result);

        }else{
            echo 'password error';
        }
    }

    //hr 发布职位
    public function post_job()
    {
        $company = $this->input->get('company');
        $p_name = $this->input->get('name');
        $p_require = $this->input->get('require');
        $p_responsibility = $this->input->get('responsibility');
        $hr_id = $this->input->get('hr_id');
        $p_type = $this->input->get('p_type');
        $p_date_start = $this->input->get('p_date_start');
        $p_date_end = $this->input->get('p_date_end');
        $salary = $this->input->get('salary');
        $row = $this->HR_model->post_job(array(
            "p_company" => $company,
            "p_name" => $p_name,
            "p_require" => $p_require,
            "p_responsibility" => $p_responsibility,
            "hr_id" => $hr_id,
            "p_type" => $p_type,
            "p_date_start" => $p_date_start,
            "p_date_end" => $p_date_end,
            "p_salary" => $salary
        ));
        if($row > 0){
            echo "success";
        }else{
            echo "fail";
        }

    }

    //查看自己信息
    public function own_mes()
    {
        $hr_id = $this->input->get('hr_id');
        $row = $this->HR_model->own_mes($hr_id);
        if(isset($row)){
            echo json_encode($row);
        }else{
         echo 'fail';
        }
    }

    //hr 修改自己信息
    public function update_hr()
    {
        $tel = $this->input->get('tel');
        $hr_id = $this->input->get('hr_id');
        $hr_name = $this->input->get('name');
        $company = $this->input->get('company');
        $email = $this->input->get('email');
        $sex = $this->input->get('sex');
        $header = $this->input->get('header');
        $row = $this->HR_model->update_hr($hr_id,array(
            "hr_tel" => $tel,
            "hr_name" => $hr_name,
            "company_id" => $company,
            "hr_email" => $email,
            "hr_sex" => $sex,
            "hr_header" => $header
        ));
        if($row>0){
            echo 'success';
        }else{
            echo 'fail';
        }
    }

    //查看投递人信息
    public function search_student()
    {
        $u_name = $this->input->get('u_name');
        $result = $this->HR_model->search_student($u_name);
        if(isset($result)){
            echo json_encode($result);
        }else{
            echo "fail";
        }
    }

    //查看发布的职位
    public function search_own_position()
    {
        $hr_id = $this->input->get('hr_id');
        $result = $this->HR_model->search_own_position($hr_id);
        if(count($result)>0){
            echo json_encode($result);
        }else{
            echo 'fail';
        }
    }

    public function get_pos_message()
    {
        $id = $this->input->get('p_id');
        $row = $this->User_model->get_pos_by_id($id);
        echo json_encode($row);
    }


    public function get_resume_by_p_id()
    {
        $p_id = $this->input->get('p_id');
        $result = $this->HR_model->get_resume_by_p_id($p_id);
        if(count($result)>0){
            echo json_encode($result);
        }else{
            echo 'fail';
        }
    }

    //hr修改个人密码
    public function hr_chpwd()
    {
        $hr_id = $this->input->get('hr_id');
        $old_pwd = $this->input->get('hr_pass');
        $pwd = $this->input->get('pwd');
        $pwd2 = $this->input->get('pwd2');
        if($old_pwd == $pwd){
            $row = $this->HR_model->hr_chpwd(array(
                'hr_id' => $hr_id,
                'pwd2' => $pwd2
            ));
            if($row>0){
                echo 'success';
            }else{
                echo 'fail';
            }
        }else{
            echo 'pwd error';
        }
    }

    //查看简历
    public function check_resume()
    {
        $r_id = $this->input->get('r_id');
        $result = $this->HR_model->check_resume($r_id);
        if(isset($result)){
            echo json_encode($result);
        }else{
            echo 'fail';
        }
    }

    //我的公司
    public function my_company()
    {
        $company_id = $this->input->get('company_id');
        $row = $this->HR_model->my_company($company_id);
        if(count($row)>0){
            echo json_encode($row);
        }else{
            echo "fail";
        }
    }

    //我的收藏
    public function get_collect_by_hr_id()
    {
        $hr_id = $this->input->get('hr_id');
        $rows = $this->HR_model->get_hr_collect_by_hr_id($hr_id);
        if(count($rows)>0){
            echo json_encode($rows);
        }else{
            echo "fail";
        }
    }

    //查看是否收藏
    public function get_collect_by_hr_id_r_id()
    {
        $r_id = $this->input->get('id');
        $hr_id = $this->input->get('hr_id');
        $row = $this->HR_model->get_collect_by_hr_id_r_id($hr_id,$r_id);
//        var_dump($row);die();
        if(count($row)>0 && $row->is_del == "0"){
            echo $row->c_id;
        }else{
            echo 'not exist';
        }
    }

    //收藏简历
    public function collect_resume()
    {
        $hr_id = $this->input->get('hr_id');
        $r_id = $this->input->get('r_id');
        $query = $this->HR_model->get_collect_resume_by_hr_id_r_id($hr_id,$r_id);
        if(count($query)>0 && $query->is_del == "1"){
            $c_id = $query->c_id;
            $res = $this->HR_model->update_collect($c_id);
            if($res>0){
                echo 'success';
            }else{
                echo 'fail';
            }
        }else{
            $row = $this->HR_model->collect_resume($hr_id,$r_id);
            if($row>0){
                echo 'success';
            }else{
                echo 'fail';
            }
        }
    }

    //删除收藏
    public function del_collect_by_c_id()
    {
        $c_id = $this->input->get('c_id');
        $row = $this->HR_model->del_collect_by_c_id($c_id);
        if($row>0){
            echo 'success';
        }else{
            echo 'fail';

        }
    }

    //所有公司
    public function all_company()
    {
        $rows = $this->HR_model->all_company();
        if(count($rows)>0){
            echo json_encode($rows);
        }else{
            echo "fail";
        }
    }

    //修改简历状态
    public function update_state()
    {
        $u_p_id = $this->input->get('u_p_id');
        $state = $this->input->get('state');
        $row = $this->HR_model->update_state($u_p_id,array(
            'schedule' => $state
        ));
        if($row>0){
            echo 'state';
        }else{
            echo 'fail';
        }

    }

}
