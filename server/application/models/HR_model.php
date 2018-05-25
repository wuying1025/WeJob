<?php

/**
 * Created by PhpStorm.
 * User: 王天禹
 * Date: 2018/5/9
 * Time: 19:10
 */


//获取PDO对象
//$pdo = DB::getInstance();

use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class HR_model extends CI_Model
{
    public function hr_reg($hr)
    {

        $query = DB::insert('t_hr', $hr);
        return $query;
    }


    public function check_hr_login($tel)
    {
        $rows = DB::row('t_hr', ['*'], "hr_tel = '$tel'");
        return $rows;
    }

    public function post_job($mes)
    {
        $row = DB::insert('t_position', $mes);
        return $row;
    }

    public function update_hr($hr_id,$mes)
    {
//        $pdo = DB::getInstance();
//        $row = $pdo->update("update t_hr set hr_tel = ".$mes['tel']." hr_header = ".$mes['header']." hr_sex = ".$mes['sex']." hr_email = ".$mes['email'].", hr_email = ".$mes['email'] ."where hr_id = ".$mes['id']."");
        $row = DB::update('t_hr', $mes, "hr_id = '$hr_id'");
        return $row;

    }

    public function search_student($u_name)
    {
        $pdo = DB::getInstance();
        $query = $pdo->query("select * from t_user where u_name like '%$u_name%' order by u_id DESC");
        return $query->fetchAll();
    }

    public function own_mes($hr_id)
    {
        $rows = DB::select('t_hr', ['*'], "hr_id = '$hr_id'");
        return $rows;
    }

    public function search_own_position($hr_id)
    {
//        $pdo = DB::getInstance();
//        $query = $pdo->query("select * from t_position where hr_id = $hr_id");
//        return $query->fetchAll();
        $rows = DB::select('t_position', ['*'], "hr_id = '$hr_id'");
        return $rows;
    }

    public function get_resume_by_p_id($p_id)
    {
        $pdo = DB::getInstance();
       $query = $pdo->query("select * from t_position p , t_user_position up , t_resume r where p.p_id = $p_id and p.p_id = up.p_id and up.u_id = r.u_id");
       return $query->fetchAll();
    }

    public function hr_chpwd($mes)
    {
        $pdo = DB::getInstance();
        $row = $pdo->query("update t_hr set hr_pass = ".$mes['pwd2']."where hr_id = ".$mes['hr_id']);
        return $row->fetchColumn();
    }

    public function check_resume($r_id)
    {
        $rows = DB::select('t_resume', ['*'], "r_id = '$r_id'");
        return $rows;

    }

    public function my_company($company_id)
    {
        $row = DB::select('t_company', ['*'], "company_id = '$company_id'");
        return $row;
    }

    public function get_hr_collect_by_hr_id($hr_id)
    {
        $pdo = DB::getInstance();
        $query = $pdo->query("select * from t_hr_collect c , t_user u where c.hr_id = $hr_id and c.u_id = u.u_id");
        return $query->fetchAll();
    }

    public function get_collect_by_hr_id_r_id($hr_id,$id)
        {
            $rows = DB::row('t_hr_collect', ['*'], ['hr_id' => "$hr_id",'r_id' => "$id"]);
            return $rows;
        }
//.......................
        public function collect_position($hr_id,$r_id)
            {
                date_default_timezone_set('Asia/Shanghai');//设置时区
                $time=date("Y-m-d H:i:s");
                $row = DB::insert('t_user_collect', [
                    'hr_id' => $hr_id,
                    'r_id' => $r_id,
                    'c_date' => $time
                ]);
                return $row;
            }
            //...........
            public function get_company(){
                    $rows = DB::row('t_company', ['company_id','company_name']);
                    return $rows;
                }

}