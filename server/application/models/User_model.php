<?php
use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class User_model extends CI_Model{   

    public function check_pos($id){
        $rows = DB::row('t_resume', ['*'], 'u_id = "'.$id.'"');
        return $rows;
    }
    public function get_user_by_name($tel){
        $rows = DB::row('t_user', ['*'], 'u_tel = "'.$tel.'"');
        return $rows;
    }
    public function add($user){
         $query = DB::insert('t_user', $user);
         return $query;
    }
    public function add_insert($message){
        $query = DB::insert('t_resume', $message);

   }
   public function add_updata($message,$id){
    $query  = DB::update('t_resume', $message, 'u_id = "'.$id.'"');
       return $query;
}

}
?>