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
    public function hr_reg($tel,$pwd)
    {
        $row = DB::insert('t_hr', [
            'hr_tel' => $tel,
            'hr_pass' => $pwd
        ]);
        return $row;
    }

    public function check_hr_login($tel)
    {
        $rows = DB::row('t_hr', ['*'], "hr_tel = '$tel'");
        return $rows;
    }

    public function post_job($mes)
    {
        $row = DB::insert('t_position', [
            $mes
        ]);
        return $row;
    }

    public function update_hr($mes)
    {
        $pdo = DB::getInstance();
        $row = $pdo->update("update t_hr set hr_tel = ".$mes['tel']." hr_header = ".$mes['header']." hr_sex = ".$mes['sex']." hr_email = ".$mes['email'].", hr_email = ".$mes['email'] ."where hr_id = ".$mes['id']."");
        return $row;
    }

    public function search_student($u_name)
    {
        $pdo = DB::getInstance();
        $query = $pdo->select("select * from t_user where u_name like '%$u_name%' order by u_id DESC");
        return $query;
    }

    public function search_own_position($hr_id)
    {
        $pdo = DB::getInstance();
        $query = $pdo->select("select * from t_position where hr_id = $hr_id");
        return $query;
    }

    public function hr_chpwd($mes)
    {
        $pdo = DB::getInstance();
        $row = $pdo->update("update t_hr set hr_pass = ".$mes['pwd2']."where hr_id = ".$mes['hr_id']);
        return $row;
    }

    public function check_resume($u_id)
    {
        $rows = DB::row('resume', ['*'], "u_id = '$u_id'");
        return $rows;

    }

}