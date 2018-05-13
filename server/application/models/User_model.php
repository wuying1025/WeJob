<?php
use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class User_model extends CI_Model{    

    public function get_user_by_name($tel){
        $rows = DB::row('t_user', ['*'], 'username = "'.$tel.'"');
        return $rows;
    }
    public function add($user){
         $query = DB::insert('t_user', $user);
         return $query;
    }
    public function add_insert($message){
        $query = DB::insert('t_resume', $message);
        return $query;
   }
   public function add_updata($message){
    $query = DB::update('t_resume', $message)
    return $query;
}

}
?>